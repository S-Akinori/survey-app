<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scale extends Model
{
    use HasFactory;

    protected $fillable = [
      'question_id',
      'min_text',
      'max_text',
      'min',
      'max',
      'step',
    ];
  
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    public function question() {
      return $this->belongsTo(Question::class);
    }
}
