<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\User;
use App\Models\UserFormMeta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserFormMetaController extends Controller
{
    //

    public function show(string $id, string $user_id) {
      $form = Form::with(['survey.user', 'questions.scale', 'questions.user_question_meta' => function ($query) use ($user_id) {
        $query->where('user_id', $user_id);
    }])->find($id);
      $user = User::find($user_id);
      return Inertia::render('Admin/FormShowWithMeta', ['form' => $form, 'user' => $user]);
    }

    public function store(Request $request, string $id, string $user_id) {
      $data = [
        'form_id' =>  $id,
        'user_id' => $user_id,
        'value' => $request->value,
      ];
      $user_form_meta = UserFormMeta::upsert($data, ['form_id', 'user_id'], ['value']);
      return redirect()->back();
    }
}
