<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Response;
use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Symfony\Component\ErrorHandler\Debug;
use Symfony\Component\HttpFoundation\StreamedResponse;

class SurveyFileController extends Controller
{
  //
  public function download(Request $request, $client_user_id)
  {
    $headers = array(
      "Content-type" => "text/csv; charset=UTF-8",
      "Content-Disposition" => "attachment; filename=file.csv",
      "Pragma" => "no-cache",
      "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
      "Expires" => "0"
    );

    $callback = function () use ($request, $client_user_id) {

      $handle = fopen('php://output', 'w');
      // $csvFileName = $filename.'.csv';
      // $path = storage_path('app/' . $csvFileName);
      // $handle = fopen($path, 'w');
      // BOMの追加
      fputs($handle, chr(0xEF) . chr(0xBB) . chr(0xBF));

      $user = auth()->user();
      $user_id = $user->id;

      if ($user->role === 'admin' && $client_user_id) {
        $user_id = $client_user_id;
      }
      $surveys = Survey::with(['forms.questions.scale'])->where('user_id', $user_id)->orWhere('user_id', 1)->latest()->get();

      Log::debug('ユーザーID:' . $user_id . 'のアンケートを取得しました');
      $questions = [];
      $titles = ['タイムスタンプ', 'ID', '属性1', '属性2', '属性3', '属性4', '属性5'];
      $scales = [];

      Log::debug(count($surveys) . "件のアンケートがあります");

      foreach ($surveys as $survey) {
        foreach ($survey->forms as $form) {
          foreach ($form->questions as $question) {
            $questions[] = $question;
            // タイトルを一時的に保存
            $tempTitle = $question->title;

            // もし質問のタイプが'scale'なら、scaleのタイトルを連結
            if ($question->type === 'scale') {
              $tempTitle .= "\nA" . $question->scale->min_text . "\nB" . $question->scale->max_text; // ここで連結
            }
            $titles[] = $tempTitle;
          }
        }
      }

      fputcsv($handle, $titles);

      $responses = Response::with(['answers', 'client'])->whereHas('client', function ($query) use ($user_id) {
        $query->where('user_id', $user_id);
      })->get();


      $groupedResponses = $responses->groupBy('client_id');
      Log::debug('回答数:' . count($groupedResponses));
      Log::debug($groupedResponses);

      foreach ($groupedResponses as $clientId => $clientResponses) {
        $contents = [];
        $count = 0;
        foreach ($clientResponses as $response) {
          if ($count === 0) {
            $contents[] = $response->created_at;
            $contents[] = $response->client->client_id;
          }
          if ($count === 1) {
            $blanks = [];
            for ($i = 0; $i < 7 - count($contents); $i++) {
              $blanks[] = '';
            }
            $contents = array_merge($contents, $blanks);
          }
          foreach ($response->answers as $answer) {
            $contents[] = $answer->value;
          }
          $count++;
        }
        Log::debug($contents);
        // CSVヘッダーの書き込み
        fputcsv($handle, $contents);
        
      }

      Log::debug($contents);
      fclose($handle);

    };
    return new StreamedResponse($callback, 200, $headers);
    // return response()->json(['filename' => $csvFileName]);
  }
}
