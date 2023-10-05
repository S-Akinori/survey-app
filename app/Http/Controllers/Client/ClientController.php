<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Symfony\Component\ErrorHandler\Debug;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ClientController extends Controller
{
  public function index(Request $request)
  {
    $user = auth()->user();
    $user_id = $user->id;
    if ($user->role === 'admin' && $request->user_id) {
      $user_id = $request->user_id;
    }
    $query = Client::query();
    if ($request->target === 'answer') {
      $query->with('responses')->whereHas('responses.survey', function($query) {
        $query->where('id', 1);
      })->where('user_id', $user_id);
    } else if ($request->target === 'no-answer') {
      $query->with('responses')->whereDoesntHave('responses.survey', function($query) {
        $query->where('id', 1);
      })->where('user_id', $user_id);
    } else {
      $query->with('responses')->where('user_id', $user_id);
    }
    $clientData = $query->paginate(20);
    $total = Client::where('user_id', $user_id)->count();
    $answerTotal = Client::with('responses')->whereHas('responses.survey', function($query) {
      $query->where('id', 1);
    })->where('user_id', $user_id)->count();
    return Inertia::render('Dashboard', [
      'clientData' => $clientData,
      'target' => $request->target ?? 'all',
      'total' => $total,
      'answerTotal' => $answerTotal,
    ]);
  }

  public function store(Request $request)
  {

    $request->validate([
      'file' => 'required|file|mimes:csv,txt|max:2048',
    ]);

    $path = $request->file->store('uploads', 'public');
    $clients = $this->extractDataOfCSV(storage_path("app/public/" . $path));

    $adminId = auth()->id(); // ログインしているユーザーのIDを取得
    foreach ($clients as $row) {
      $existingClient = Client::where('client_id', $row['client_id'])->where('user_id', $adminId)->first();
      if (!$existingClient) {
        $client = new Client();
        $client->client_id = $row['client_id'];
        $client->user_id = $adminId;
        $client->name = $row['client_id']; //ダミー
        $client->password = Hash::make($row['client_id']); //ダミー
        $client->save();
      }
    }

    return redirect()->route('dashboard');
  }

  private function extractDataOfCSV($path)
  {
    $handle = fopen($path, 'r');
    fgetcsv($handle, 1000, ",");  // headerをスキップ

    $clients = [];
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
      $clientId = $data[0];

      // // client_idが既に存在するかチェック
      // $existingClient = Client::where('client_id', $clientId)->first();

      // 存在しない場合のみ、新しいレコードを作成
      $clients[] = [
        'client_id' => $clientId,
      ];
    }

    fclose($handle);
    return $clients;
  }

  public function download(Request $request, $client_user_id)
  {
    Log::debug($request->target);
    $headers = array(
      "Content-type" => "text/csv; charset=UTF-8",
      "Content-Disposition" => "attachment; filename=file.csv",
      "Pragma" => "no-cache",
      "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
      "Expires" => "0"
    );

    $callback = function () use ($request, $client_user_id) {
      $handle = fopen('php://output', 'w');
      // BOMの追加
      fputs($handle, chr(0xEF) . chr(0xBB) . chr(0xBF));
      Log::debug('open');
      $user = auth()->user();
      $user_id = $user->id;

      if ($user->role === 'admin' && $client_user_id) {
        $user_id = $client_user_id;
      }

      // CSVヘッダーの書き込み
      fputcsv($handle, ['id', '従業員ID', '状況', '回答日時', '登録日時']);

      $query = Client::query();
      $status = '';
      if ($request->target === 'answer') {
        $clients = $query->with('responses')->whereHas('responses.survey', function($query) {
          $query->where('id', 1);
        })->where('user_id', $user_id)->get();
        $status = '回答済み';
        foreach ($clients as $client) {
          fputcsv($handle, [$client->id, $client->client_id, $status, $client->responses[1]->submitted_at, $client->created_at]);
        }
      } else if ($request->target === 'no-answer') {
        $clients = $query->with('responses')->whereDoesntHave('responses.survey', function($query) {
          $query->where('id', 1);
        })->where('user_id', $user_id)->get();
        $status = '未回答';
        foreach ($clients as $client) {
          fputcsv($handle, [$client->id, $client->client_id, $status, '', $client->created_at]);
        }
      } else {
        $clients = $query->with('responses')->where('user_id', $user_id)->get();
        foreach ($clients as $client) {
          $status = $client->responses->where('id', 1)->first() ? '回答済み' : '未回答';
          $submitted_at = $status === '回答済み' ? $client->responses[1]->submitted_at : '';
          fputcsv($handle, [$client->id, $client->client_id, $status, $submitted_at, $client->created_at]);
        }
      }
      Log::debug('csv-created');
      fclose($handle);
    };

    return new StreamedResponse($callback, 200, $headers);
  }
}
