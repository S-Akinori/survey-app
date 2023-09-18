<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
      'form_id',
      'name',
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
}
