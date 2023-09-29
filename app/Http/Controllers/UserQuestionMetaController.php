<?php

namespace App\Http\Controllers;

use App\Models\UserQuestionMeta;
use Illuminate\Http\Request;

class UserQuestionMetaController extends Controller
{
  public function store(Request $request, string $id, string $user_id) {
    $data = [
      'question_id' =>  $id,
      'user_id' => $user_id,
      'value' => $request->value,
    ];
    $user_form_meta = UserQuestionMeta::upsert($data, ['question_id', 'user_id'], ['value']);
    return redirect()->back();
  }
}
