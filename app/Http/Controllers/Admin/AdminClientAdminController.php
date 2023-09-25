<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClientAdmin;
use App\Models\Survey;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class AdminClientAdminController extends Controller
{
    //

    public function index() {
      $users = User::all();
      return Inertia::render('Admin/ClientAdminIndex', [
        'users' => $users,
      ]);
    }

    public function create() {
      return Inertia::render('Admin/ClientAdminCreate');
    }

    public function show(string $id) {
      $user = User::with('surveys')->find($id);
      return Inertia::render('Admin/ClientAdminShow', [
        'user' => $user,
      ]);
    }

    public function store(Request $request) {
      $request->validate([
        'company' => 'required|string|max:255',
        'department' => 'required|string|max:255',
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:' . ClientAdmin::class,
        'password' => ['required', Rules\Password::defaults()],
        'start_date' => 'required|date',
        'end_date' => 'required|date',
      ]);

      $start_date = Carbon::parse($request->start_date);
      $end_date = Carbon::parse($request->end_date);

      $client_admin = ClientAdmin::create([
        'company' => $request->company,
        'department' => $request->department,
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'start_date' => $start_date,
        'end_date' => $end_date,
      ]);

      Survey::create([
        'user_id' => $client_admin->id,
        'title' => 'アンケート',
        'status' => 'draft',
      ]);

      return redirect()->route('admin.survey.index');
    }
}
