<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
  use HasFactory;

  protected $fillable = [
    'client_admin_id',
    'title',
    'description',
    'status',
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
}
