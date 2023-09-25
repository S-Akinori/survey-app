<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClientLoginRequest;
use App\Models\Survey;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ClientLoginController extends Controller
{
  /**
   * ログイン画面
   */
  public function create()
  {
    return Inertia::render('Client/Auth/Login');
  }

  /**
   * ログイン
   */
  public function store(ClientLoginRequest $request): RedirectResponse
  {
    $request->authenticate();

    $request->session()->regenerate();

    $client = Auth::guard('client')->user();
    $user_id = $client->user_id;
    $survey_id = Survey::where('user_id', $user_id)->first()->id;
    return redirect()->route('client.survey.show', ['id' => $survey_id]);

    // return redirect()->route('client.survey.show', ['user_id' => $client->user_id]);
    // return Inertia::location(route('client.survey.index'));
    // return to_route('client.survey.index');
  }

  /**
   * ログアウト
   */
  public function destroy(Request $request): RedirectResponse
  {
    Auth::guard('client')->logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return to_route('client.login');
  }
}
