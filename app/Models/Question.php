<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
      'form_id',
      'title',
      'description',
      'type',
      'status',
      'required',
    ];
  
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    public function scale() {
      return $this->hasOne(Scale::class);
    }
    public function form() {
      return $this->belongsTo(Form::class);
    }
    public function choices() {
      return $this->hasMany(Choice::class)->orderBy('order', 'asc');
    }
    public function answers() {
      return $this->hasMany(Answer::class);
    }
    public function user_question_meta() {
      return $this->hasOne(UserQuestionMeta::class, 'question_id');
    }
}
