<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Models\Form;
use App\Models\Question;
use App\Models\Scale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class QuestionController extends Controller
{
    //
    public function show(string $id) {
      $question = Question::with(['scale', 'choices'])->find($id);
      return Inertia::render('Admin/QuestionShow', ['question' => $question]);
    }

    public function create(string $form_id) {
      $user = Form::with('survey.user')->find($form_id)->survey->user;
      return Inertia::render('Admin/QuestionCreate', ['form_id' => $form_id, 'user' => $user]);
    }

    public function edit(string $id) {
      $question = Question::with(['scale', 'choices', 'form.survey.user'])->find($id);
      return Inertia::render('Admin/QuestionEdit', ['question' => $question]);
    }

    public function store(Request $request, string $form_id) {
      // return

      $request->validate([
        'title' => 'required|string|max:255',
        // 'description' => 'string|max:255',
        'type' => 'required|string|max:255',
      ]);

      $question = Question::create([
        'form_id' => $form_id,
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
      } else if($request->type === 'dropdown' || $request->type === 'radio') {
        $question->choices()->createMany($request->choices);
      }

      return redirect()->route('admin.form.show', ['id' => $form_id]);
    }

    public function update(Request $request, $id) {
      $request->validate([
        'title' => 'required|string|max:255',
        // 'description' => 'string|max:255',
        'type' => 'required|string|max:255',
      ]);

      $question = Question::with('choices')->find($id);
      $question->title = $request->title;
      $question->description = $request->description;
      $question->type = $request->type;
      $question->save();

      if($request->type === 'scale') {
        $question->scale()->update([
          'min_text' => $request->scale['min_text'],
          'max_text' => $request->scale['max_text'],
          'min' => $request->scale['min'],
          'max' => $request->scale['max'],
          'step' => $request->scale['step'],
        ]);
      } else if($request->type === 'dropdown' || $request->type === 'radio') {
        $updatedIds = [];
        foreach($question->choices as $choice) {
          if(!in_array($choice->id, array_column($request->choices, 'id'))) {
            $choice->delete();
            $updatedIds[] = $choice->id;
          } else {
            $choice->update([
              'title' => $request->choices[array_search($choice->id, array_column($request->choices, 'id'))]['title'],
              'value' => $request->choices[array_search($choice->id, array_column($request->choices, 'id'))]['value'],
              'order' => $request->choices[array_search($choice->id, array_column($request->choices, 'id'))]['order'],
            ]);
            $updatedIds[] = $choice->id;
          }
        }
        foreach($request->choices as $choice) {
          if(!in_array($choice['id'], $updatedIds)) {
            $question->choices()->create([
              'title' => $choice['title'],
              'value' => $choice['value'],
              'order' => $choice['order'],
            ]);
          }
        }
      }

      return redirect()->route('admin.form.show', ['id' => $question->form_id]);
    }

    public function destroy(string $id) {
      $question = Question::find($id);
      $form_id = $question->form_id;
      $question->delete();
      return redirect()->route('admin.form.show', ['id' => $form_id]);
    }
}
