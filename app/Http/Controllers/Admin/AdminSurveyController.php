<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClientAdmin;
use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AdminSurveyController extends Controller
{
    //
    public function index(string $client_admin_id) {
      $surveys = Survey::where('client_admin_id', $client_admin_id)->get();
      return Inertia::render('Admin/SurveyIndex', ['surveys' => $surveys]);
    }

    public function create(string $client_admin_id = null) {
      if(!$client_admin_id) {
        return Inertia::render('Admin/CommonSurveyCreate');
      }
      $client_admin = ClientAdmin::find($client_admin_id);
      return Inertia::render('Admin/SurveyCreate', ['clientAdmin' => $client_admin]);
    }
}
