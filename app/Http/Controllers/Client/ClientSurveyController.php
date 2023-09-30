<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\Response;
use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ClientSurveyController extends Controller
{
  public function show($id) {
    $user_id = Auth::guard('client')->user()->user_id;
    $survey = Survey::with(['forms.questions.scale', 'forms.questions.choices', 'forms.user_form_meta' => function ($query) use ($user_id) {
      $query->where('user_id', $user_id);
    }, 'forms.questions.user_question_meta' => function ($query) use ($user_id) {
      $query->where('user_id', $user_id);
  }])->find($id);
    $response = Response::with('answers')->where('client_id', Auth::guard('client')->user()->id)->where('survey_id', $id)->first();
    $client = Auth::guard('client')->user();
    Log::debug($client);
    if($id != 1 && $client->user_id != $survey->user_id) {
      return redirect()->route('client.login');
    } else if($survey->forms->count() == 0 || $survey->forms->first()->questions->count() == 0) {
      return redirect()->route('admin.client.survey.show', ['id' => 1, 'user_id' => $user_id]);
    } else {
      return Inertia::render('Client/SurveyShow', ['survey' => $survey, 'response' => $response]);
    }
    // return view('client.survey.show', ['survey' => $survey]);
  }

  // name format is q_{question_id}
  public function store(Request $request, $survey_id)
  {
    $request->validate([
      'q_*' => 'required'
    ]);
    $client = Auth::guard('client')->user();
    $response = Response::create([
      'survey_id' => $survey_id,
      'client_id' => $client->id,
      'submitted_at' => now(),
    ]);
    $answers = [];
    foreach ($request->all() as $key => $value) {
      if (preg_match('/^q_/', $key)) {
        $question_id = preg_replace('/^q_/', '', $key);
        $answers[] = [
          'response_id' => $response->id,
          'question_id' => $question_id,
          'value' => $value,
        ];
      }
    }
    $response->answers()->createMany($answers);
    if($survey_id == 1) {
      return redirect()->route('client.thanks');
    } else {
      $next_survey_id = Survey::where('user_id', 1)->first()->id;
      return redirect()->route('client.survey.show', ['id' => $next_survey_id]);
    }
  }

  public function update(Request $request, $survey_id) {
    $request->validate([
      'q_*' => 'required'
    ]);
    $client = Auth::guard('client')->user();
    $response = Response::where('client_id', $client->id)->where('survey_id', $survey_id)->first();
    $answers = [];
    foreach ($request->all() as $key => $value) {
      if (preg_match('/^q_/', $key)) {
        $question_id = preg_replace('/^q_/', '', $key);
        $answers[] = [
          'response_id' => $response->id,
          'question_id' => $question_id,
          'value' => $value,
        ];
      }
    }
    $response->answers()->upsert($answers, ['response_id', 'question_id'], ['value']);
    if($survey_id == 1) {
      return redirect()->route('client.thanks');
    } else {
      $next_survey_id = Survey::where('user_id', 1)->first()->id;
      return redirect()->route('client.survey.show', ['id' => $next_survey_id]);
    }
  }
}
