<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'title',
    'description',
    'status',
    'token',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [];

  public function forms()
  {
    return $this->hasMany(Form::class);
  }
  public function user() {
    return $this->belongsTo(User::class);
  }
  public function responses() {
    return $this->hasMany(Response::class);
  }
}
