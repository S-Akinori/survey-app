<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminLoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminLoginController extends Controller
{
  /**
   * ログイン画面
   */
  public function create()
  {
    return Inertia::render('Admin/Auth/Login');
  }

  /**
   * ログイン
   */
  public function store(AdminLoginRequest $request): RedirectResponse
  {
    $request->authenticate();

    $request->session()->regenerate();

    return redirect()->route('admin.index');
    // return Inertia::location(route('admin.survey.index'));
    // return to_route('admin.survey.index');
  }

  /**
   * ログアウト
   */
  public function destroy(Request $request): RedirectResponse
  {
    Auth::guard('admin')->logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return to_route('admin.login');
  }
}
