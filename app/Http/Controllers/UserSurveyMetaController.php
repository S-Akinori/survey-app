<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use App\Models\User;
use App\Models\UserFormMeta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserSurveyMetaController extends Controller
{
  //
  public function show(string $id, string $user_id)
  {
    $survey = Survey::with(['user', 'forms', 'forms.user_form_meta' => function ($query) use ($user_id) {
      $query->where('user_id', $user_id);
  }])->find($id);
    $user = User::find($user_id);
    return Inertia::render('Admin/SurveyShowWithMeta', ['survey' => $survey, 'user' => $user]);
  }
}
