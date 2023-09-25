<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class SurveyController extends Controller
{
    //
    public function show(string $user_id, string $id) {
      $survey = Survey::with('forms')->find($id);
      return Inertia::render('Admin/SurveyShow', ['survey' => $survey]);
    }

    public function showByAdminId(string $user_id) {
      $survey = Survey::with(['forms.questions.scale', 'forms.questions.choices'])->where('user_id', $user_id)->first();
      $common_servey = Survey::with(['forms.questions.scale', 'forms.questions.choices'])->where('user_id', 1)->first();
      $surveys = [$survey, $common_servey];
      return Inertia::render('Client/SurveyShow', ['surveys' => $surveys]);
    }
}