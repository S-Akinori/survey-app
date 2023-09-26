<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Survey;
use Illuminate\Http\Request;
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

      $surveys = Survey::with(['forms.questions.scale', 'responses', 'responses.clients', 'responses.answers'])->where('user_id', $user->id)->orWhere('user_id', 1)->get();

      $questions = [];
      $scales = [];

      foreach($surveys as $survey) {
        foreach($survey->forms as $form) {
          foreach($form->questions as $question) {
            $questions[] = $question;
            if ($question->type === 'scale') {
              $scales[] = $question->scale;
            }
          }
        }
      }

      // CSVヘッダーの書き込み
      foreach($surveys as $survey) {
        foreach($survey->forms as $form) {
          $questions = $form->questions;
          foreach($questions as $question) {
            $choices = $question->choices;
            foreach($choices as $choice) {
              fputcsv($handle, [$survey->id, $survey->title, $survey->description, $form->id, $form->title, $form->description, $question->id, $question->title, $question->description, $question->type, $choice->id, $choice->title, $choice->description, $choice->value]);
            }
          }
        }
      }

      // CSVヘッダーの書き込み
      fputcsv($handle, ['id', 'client_id', 'status', 'submitted_at', 'created_at']);

      $query = Client::query();
      $status = '';
      if ($request->target === 'answer') {
        $clients = $query->with('responses')->where('user_id', $user->id)->has('responses', '>=', 2)->get();
        $status = '回答済み';
        foreach ($clients as $client) {
          fputcsv($handle, [$client->id, $client->client_id, $status, $client->responses[1]->submitted_at, $client->created_at]);
        }
      } else if ($request->target === 'no-answer') {
        $clients = $query->with('responses')->where('user_id', $user->id)->has('responses', '<', 2)->get();
        $status = '未回答';
        foreach ($clients as $client) {
          fputcsv($handle, [$client->id, $client->client_id, $status, '', $client->created_at]);
        }
      } else {
        $clients = $query->with('responses')->where('user_id', $user->id)->get();
        foreach ($clients as $client) {
          $status = $client->responses->count() > 1 ? '回答済み' : '未回答';
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
