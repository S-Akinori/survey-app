<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
  use HasFactory;

  protected $fillable = [
    'survey_id',
    'title',
    'description',
    'url',
    'status',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [];

  public function questions() {
    return $this->hasMany(Question::class);
  }
  public function survey() {
    return $this->belongsTo(Survey::class);
  }
  public function user_form_meta() {
    return $this->hasOne(UserFormMeta::class, 'form_id');
  }
}
