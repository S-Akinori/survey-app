<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Survey;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminClientSurveyController extends Controller
{
  //
  public function show($id)
  {
    $survey = Survey::with(['forms.questions.scale', 'forms.questions.choices'])->find($id);
    return Inertia::render('Admin/ClientSurveyShow', ['survey' => $survey]);
  }
}
