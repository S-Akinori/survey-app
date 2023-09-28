<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Response;
use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\ErrorHandler\Debug;
use Symfony\Component\HttpFoundation\StreamedResponse;

class SurveyFileController extends Controller
{
  //
  public function download(Request $request)
  {
    $headers = array(
      "Content-type" => "text/csv; charset=UTF-8",
      "Content-Disposition" => "attachment; filename=file.csv",
      "Pragma" => "no-cache",
      "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
      "Expires" => "0"
    );

    $callback = function () use ($request) {
      $handle = fopen('php://output', 'w');
      // BOMの追加
      fputs($handle, chr(0xEF) . chr(0xBB) . chr(0xBF));

      $user = auth()->user();
      $user_id = $request->user_id;

      if ($user->role === 'admin' && $request->user_id) {
        $user_id = $request->user_id;
      }

      // $surveys = Survey::with(['forms.questions.scale', 'responses.answers', 'responses.client'])
      //   ->where(function ($query) use ($user_id) {
      //     // 特定のuser_idのレコード
      //     $query->where('user_id', $user_id)

      //       // または、user_id=1であり、リレーションであるclientのuser_idが特定のuser_id
      //       ->orWhere(function ($subQuery) use ($user_id) {
      //         $subQuery->where('user_id', 1)
      //           ->whereHas('responses.client', function ($clientQuery) use ($user_id) {
      //             $clientQuery->where('user_id', $user_id);
      //           });
      //       });
      //   })
      //   ->latest()
      //   ->get();
      $surveys = Survey::with(['forms.questions.scale'])->where('user_id', $user_id)->orWhere('user_id', 1)->latest()->get();

      Log::debug('ユーザーID:' . $user_id . 'のアンケートを取得しました');
      $questions = [];
      $titles = ['タイムスタンプ', 'ID'];
      $scales = [];

      Log::debug(count($surveys) . "件のアンケートがあります");

      foreach ($surveys as $survey) {
        if ($survey->id == 1) {
          $blanks = [];
          for ($i = 0; $i < 7 - count($titles); $i++) {
            $blanks[] = '';
          }
          $titles = array_merge($titles, $blanks);
        }
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

      //   $client_ids = $responses->map(function ($response) {
      //     return $response->client->id;
      // })->unique()->all();

      //   Log::debug($client_ids);

      $groupedResponses = $responses->groupBy('client_id');
      Log::debug('回答数:' . count($groupedResponses));
      Log::debug($groupedResponses);

      foreach ($groupedResponses as $clientId => $clientResponses) {
        $contents = [];
        $count = 0;
        $contents[] = $clientResponses[0]->submitted_at;
        $contents[] = $clientId;
        foreach ($clientResponses as $response) {
          Log::debug('res Id'.$response->id);
          Log::debug('survey id'.$response->survey_id);
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
        // $count++;
      }
      // fputcsv($handle, $contents);

      // foreach ($responses as $response) { //foreach しているが、実際は1件のみ
      //   if ($response->id == 1) {
      //     $blanks = [];
      //     for ($i = 0; $i < 7 - count($contents); $i++) {
      //       $blanks[] = '';
      //     }
      //     $contents = array_merge($contents, $blanks);
      //   }
      //   if ($survey->id != 1) {
      //     $contents[] = $response->submitted_at;
      //     $contents[] = $response->client->client_id;
      //   }
      //   foreach ($response->answers as $answer) {
      //     $contents[] = $answer->value;
      //   }
      // }

      Log::debug($contents);

      // $query = Client::query();
      // $status = '';
      // if ($request->target === 'answer') {
      //   $clients = $query->with('responses')->where('user_id', $user->id)->has('responses', '>=', 2)->get();
      //   $status = '回答済み';
      //   foreach ($clients as $client) {
      //     fputcsv($handle, [$client->id, $client->client_id, $status, $client->responses[1]->submitted_at, $client->created_at]);
      //   }
      // } else if ($request->target === 'no-answer') {
      //   $clients = $query->with('responses')->where('user_id', $user->id)->has('responses', '<', 2)->get();
      //   $status = '未回答';
      //   foreach ($clients as $client) {
      //     fputcsv($handle, [$client->id, $client->client_id, $status, '', $client->created_at]);
      //   }
      // } else {
      //   $clients = $query->with('responses')->where('user_id', $user->id)->get();
      //   foreach ($clients as $client) {
      //     $status = $client->responses->count() > 1 ? '回答済み' : '未回答';
      //     $submitted_at = $status === '回答済み' ? $client->responses[1]->submitted_at : '';
      //     fputcsv($handle, [$client->id, $client->client_id, $status, $submitted_at, $client->created_at]);
      //   }
      // }
      fclose($handle);
    };

    return new StreamedResponse($callback, 200, $headers);
  }
}
