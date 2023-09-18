<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SurveyController extends Controller
{
    //
    public function show(string $id) {
      $survey = Survey::with('forms')->find($id);
      return Inertia::render('Client/SurveyShow', ['survey' => $survey]);
    }

    public function showByAdminId(string $client_admin_id) {
      $survey = Survey::with('forms.questions.scale')->where('client_admin_id', $client_admin_id)->first();
      return Inertia::render('Client/SurveyShow', ['survey' => $survey]);
    }
}
