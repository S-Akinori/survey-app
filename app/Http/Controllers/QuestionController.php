<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Models\Question;
use App\Models\Scale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class QuestionController extends Controller
{
    //
    public function show(string $id) {
      $question = Question::with('scale')->find($id);
      return Inertia::render('Admin/QuestionShow', ['question' => $question]);
    }

    public function create(string $form_id) {
      return Inertia::render('Admin/QuestionCreate', ['form_id' => $form_id]);
    }

    public function edit(string $id) {
      $question = Question::with('scale')->find($id);
      return Inertia::render('Admin/QuestionEdit', ['question' => $question]);
    }

    public function store(Request $request, string $form_id) {
      // Log::debug($request->scale['minText']);
      // return

      $request->validate([
        'name' => 'required|string|max:255',
        'title' => 'required|string|max:255',
        // 'description' => 'string|max:255',
        'type' => 'required|string|max:255',
      ]);

      $question = Question::create([
        'form_id' => $form_id,
        'name' => $request->name,
        'title' => $request->title,
        'description' => $request->description,
        'type' => $request->type,
        'status' => 'draft',
        'required' => 'true',
      ]);

      if($request->type === 'scale') {
        $question->scale()->create([
          'min_text' => $request->scale['minText'],
          'max_text' => $request->scale['maxText'],
          'min' => $request->scale['min'],
          'max' => $request->scale['max'],
          'step' => $request->scale['step'],
        ]);
      }

      return redirect()->route('admin.form.show', ['id' => $form_id]);
    }

    public function update(Request $request, $id) {
      $request->validate([
        'name' => 'required|string|max:255',
        'title' => 'required|string|max:255',
        // 'description' => 'string|max:255',
        'type' => 'required|string|max:255',
      ]);

      $question = Question::find($id);
      $question->name = $request->name;
      $question->title = $request->title;
      $question->description = $request->description;
      $question->type = $request->type;
      $question->save();

      if($request->type === 'scale') {
        $question->scale()->update([
          'min_text' => $request->scale['minText'],
          'max_text' => $request->scale['maxText'],
          'min' => $request->scale['min'],
          'max' => $request->scale['max'],
          'step' => $request->scale['step'],
        ]);
      }

      return redirect()->route('admin.question.show', ['id' => $question->id]);
    }
}
