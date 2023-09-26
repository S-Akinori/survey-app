<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check() || Auth::user()->role !== 'admin') {
            // ユーザーが認証されていないか、ロールが 'admin' でない場合
            return redirect('/admin/login'); // または適切なエラーページにリダイレクト
        }

        return $next($request);
    }
}
