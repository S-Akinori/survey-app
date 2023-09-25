<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Survey;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ClientAuthenticatedSessionController extends Controller
{
  public function create(): Response
  {
    return Inertia::render('Client/Auth/Login');
  }

  public function store(LoginRequest $request): RedirectResponse
  {
    $credentials = $request->only(['client_id']);

    if (Auth::guard('client')->attempt($credentials)) {
      $client = Auth::guard('client')->user();
      $user_id = $client->user_id;
      $survey_id = Survey::where('user_id', $user_id)->first()->id;
      return redirect()->route('client.survey.show', ['survey_id' => $survey_id]);
    }

    return back()->withErrors([
        'login' => ['ログインに失敗しました'],
    ]);

  }
}
