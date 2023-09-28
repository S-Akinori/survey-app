<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Survey;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'start_date' => 'string',
            'end_date' => 'string',
            // 'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'company' => $request->company,
            'department' => $request->department,
            'start_date' => Carbon::parse($request->start_date),
            'end_date' => Carbon::parse($request->end_date),
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        
        event(new Registered($user));

        $survey = Survey::create([
          'user_id' => $user->id,
          'title' => 'Key Culture Survey',
          'status' => 'draft',
          'token' => Str::random(20)
        ]);
        
        //フォームを作成
        $survey->forms()->create([
          'title' => '事前に以下にご回答ください',
          'status' => 'draft',
        ]);

        // Auth::login($user);

        //初回用のフォームを作成
        session(['is_first' => true]);

        return redirect()->route('admin.form.show', ['id' => $survey->forms->first()->id]);
    }
}
