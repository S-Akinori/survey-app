<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
  public function index()
  {
    $clientData = Client::paginate(20);
    return Inertia::render('Dashboard', [
      'clientData' => $clientData
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
      $existingClient = Client::where('client_id', $row['client_id'])->first();
      if(!$existingClient) {
        $client = new Client();
        $client->client_id = $row['client_id'];
        $client->created_at = $row['created_at'];
        $client->client_admin_id = $adminId;
        $client->save();
      }
    }

    return to_route('dashboard');
  }

  private function extractDataOfCSV($path)
  {
    $handle = fopen($path, 'r');
    fgetcsv($handle, 1000, ",");  // headerをスキップ

    $clients = [];
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
      $clientId = $data[1];

      // // client_idが既に存在するかチェック
      // $existingClient = Client::where('client_id', $clientId)->first();

      // 存在しない場合のみ、新しいレコードを作成
      $clients[] = [
        'client_id' => $clientId,
        'created_at' => date("Y-m-d H:i:s", strtotime($data[0]))
      ];
    }

    fclose($handle);
    return $clients;
  }
}
