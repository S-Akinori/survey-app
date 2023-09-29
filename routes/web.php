<?php

use App\Http\Controllers\Admin\AdminClientAdminController;
use App\Http\Controllers\Admin\AdminClientSurveyController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\AdminSurveyController;
use App\Http\Controllers\Admin\RegisteredAdminController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Client\ClientAuthenticatedSessionController;
use App\Http\Controllers\Client\ClientClientSurveyController;
use App\Http\Controllers\Client\ClientController;
use App\Http\Controllers\Client\ClientLoginController;
use App\Http\Controllers\Client\ClientSurveyController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\SurveyFileController;
use App\Http\Controllers\UserFormMetaController;
use App\Http\Controllers\UserQuestionMetaController;
use App\Http\Controllers\UserSurveyMetaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [ClientController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/create-list', function () {
    return Inertia::render('CreateList');
})->middleware(['auth', 'verified'])->name('create-list');
Route::get('/clients-download/{client_user_id}', [ClientController::class, 'download'])->name('download');
Route::post('/answers-download', [SurveyFileController::class, 'download'])->name('answers.download');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/upload', [ClientController::class, 'store'])->name('upload');

// Client Auth
Route::get('/client/login', [ClientLoginController::class, 'create'])->name('client.login');
Route::post('/client/login', [ClientLoginController::class, 'store'])->name('client.login.store');
Route::post('/client/logout', [ClientLoginController::class, 'destroy'])->name('client.logout');

Route::middleware('auth:client')->group(function() {
  Route::get('/client/survey/{id}', [ClientSurveyController::class, 'show'])->name('client.survey.show');
  Route::post('/client/survey/{survey_id}', [ClientSurveyController::class, 'store'])->name('client.survey.store');
  Route::put('/client/survey/{survey_id}', [ClientSurveyController::class, 'update'])->name('client.survey.update');
  Route::get('/client/thanks', function() {
    return Inertia::render('Client/Thanks');
  })->name('client.thanks');
});

// Admin Auth
Route::get('/admin/login', [AdminLoginController::class, 'create'])->middleware('admin.redirect')->name('admin.login');
Route::post('/admin/login', [AdminLoginController::class, 'store'])->name('admin.login.store');
Route::post('/admin/logout', [AdminLoginController::class, 'destroy'])->name('admin.logout');

Route::middleware('admin')->group(function() {
  Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
  
  Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('admin.client.register');

  Route::post('register', [RegisteredUserController::class, 'store'])->name('admin.client.register');

  Route::get('/admin/users', [AdminClientAdminController::class, 'index'])->name('admin.users.index');

  Route::get('/admin/users/{id}', [AdminClientAdminController::class, 'show'])->name('admin.users.show');
  Route::get('/admin/surveys/{id}', [AdminSurveyController::class, 'show'])->name('admin.survey.show');
  Route::get('/admin/surveys/{id}/users/{user_id}', [UserSurveyMetaController::class, 'show'])->name('admin.survey.user.show');
  Route::post('/admin/surveys/{id}/users/{user_id}', [UserFormMetaController::class, 'store'])->name('admin.survey.user.store');
  Route::get('/admin/surveys/{survey_id}/forms/create', [FormController::class, 'create'])->name('admin.form.create');
  Route::post('/admin/surveys/{survey_id}/forms/create', [FormController::class, 'store'])->name('admin.form.store');
  Route::get('/admin/clientAdmin/create', [AdminClientAdminController::class, 'create'])->name('admin.clientAdmin.create');
  Route::post('/admin/clientAdmin/create', [AdminClientAdminController::class, 'store'])->name('admin.clientAdmin.store');
  Route::get('/admin/clientAdmin/{id}/edit', [AdminClientAdminController::class, 'edit'])->name('admin.clientAdmin.edit');
  Route::put('/admin/clientAdmin/{id}', [AdminClientAdminController::class, 'update'])->name('admin.clientAdmin.update');

  Route::get('/admin/forms', [FormController::class, 'index'])->name('admin.form.index');
  Route::get('/admin/forms/{id}', [FormController::class, 'show'])->name('admin.form.show');
  Route::get('/admin/forms/{id}/users/{user_id}', [UserFormMetaController::class, 'show'])->name('admin.form.user.show');
  Route::post('/admin/questions/{id}/users/{user_id}', [UserQuestionMetaController::class, 'store'])->name('admin.question.user.store');
  Route::get('/admin/forms/{id}/edit', [FormController::class, 'edit'])->name('admin.form.edit');
  Route::put('/admin/forms/{id}', [FormController::class, 'update'])->name('admin.form.update');
  Route::delete('/admin/forms/{id}', [FormController::class, 'destroy'])->name('admin.form.destroy');

  Route::get('/admin/questions/show/{id}', [QuestionController::class, 'show'])->name('admin.question.show');
  Route::get('/admin/forms/{form_id}/questions/create', [QuestionController::class, 'create'])->name('admin.question.create');
  Route::post('/admin/forms/{form_id}/questions/create', [QuestionController::class, 'store'])->name('admin.question.store');
  Route::get('/admin/questions/{id}/edit', [QuestionController::class, 'edit'])->name('admin.question.edit');
  Route::put('/admin/questions/{id}', [QuestionController::class, 'update'])->name('admin.question.update');
  Route::delete('/admin/questions/{id}', [QuestionController::class, 'destroy'])->name('admin.question.destroy');

  Route::get('/admin/client/survey/thanks', function() {
    return Inertia::render('Admin/ClientSurveyThanks');
  })->name('admin.client.survey.thanks');
  Route::get('/admin/client/survey/{id}/users/{user_id}', [AdminClientSurveyController::class, 'show'])->name('admin.client.survey.show');

  Route::get('/download-file/{client_user_id}/{filename}', [SurveyFileController::class, 'download'])->name('admin.download.file');
});

// Route::middleware('guest:admin')->group(function () {
// });
Route::get('/admin/register', [RegisteredAdminController::class, 'create'])->name('admin.register');
Route::post('/admin/register', [RegisteredAdminController::class, 'store'])->name('admin.register.store');

Route::get('/refresh-csrf', function() {
  return ['csrfToken' => csrf_token()];
});

require __DIR__.'/auth.php';
