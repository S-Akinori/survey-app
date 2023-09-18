<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClientLoginRequest;
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
        Log::debug($client);

        return redirect()->route('client.survey.show', ['client_admin_id' => $client->client_admin_id]);
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
