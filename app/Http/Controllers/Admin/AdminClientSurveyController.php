<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Survey;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminClientSurveyController extends Controller
{
  //
  public function show($id, $user_id)
  {
    $survey = Survey::with(['forms.questions.scale', 'forms.questions.choices', 'forms.user_form_meta' => function ($query) use ($user_id) {
      $query->where('user_id', $user_id);
    }, 'forms.questions.user_question_meta' => function ($query) use ($user_id) {
      $query->where('user_id', $user_id);
    }])->find($id);
    //questions->count() == 0の場合
    if($survey->forms->count() == 0 || $survey->forms->first()->questions->count() == 0) {
      return redirect()->route('admin.client.survey.show', ['id' => 1, 'user_id' => $user_id]);
    }
    return Inertia::render('Admin/ClientSurveyShow', ['survey' => $survey, 'user_id' => $user_id]);
  }
}
