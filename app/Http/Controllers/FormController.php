<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    //
    public function index() {
      $forms = Form::all();
      return Inertia::render('Admin/FormIndex', ['forms' => $forms]);
    }

    public function show(string $id) {
      $form = Form::with('questions.scale')->find($id);
      // $form = Form::find($id)->with('questions');
      return Inertia::render('Admin/FormShow', ['form' => $form]);
    }

    public function create(string $client_admin_id = null) {
      return Inertia::render('Admin/FormCreate');
    }

    public function edit(string $id) {
      $form = Form::find($id);
      return Inertia::render('Admin/FormEdit', ['form' => $form]);
    }

    public function store(Request $request) {
      $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string|max:255',
      ]);

      $form = Form::create([
        'survey_id' => 1,
        'title' => $request->title,
        'description' => $request->description,
        'status' => 'draft',
      ]);

      return redirect()->route('admin.question.create', ['form_id' => $form->id]);
    }

    public function update(Request $request, string $id) {
      $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string|max:255',
      ]);

      $form = Form::find($id);
      $form->title = $request->title;
      $form->description = $request->description;
      $form->save();

      return redirect()->route('admin.form.show', ['id' => $form->id]);
    }
}
