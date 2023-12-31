<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;


class Client extends Authenticatable
{
    use HasFactory;

    // モデルが関連付けられているテーブル
    protected $table = 'clients';

    // マスアサインメントを避けるためにfillableまたはguardedを使用
    // この例ではfillableを使用
    protected $fillable = [
        'client_id', 'name', 'password', 'client_admin_id', 'created_at', 'updated_at'
    ];

    protected $hidden = [
      'password',
  ];

    // created_atとupdated_atカラムのデフォルトの型はdatetimeですが、
    // もしカスタムのフォーマットが必要な場合は以下のように$castsプロパティを使用します。
    // protected $casts = [
    //     'created_at' => 'datetime:Y-m-d H:i:s',
    //     'updated_at' => 'datetime:Y-m-d H:i:s',
    // ];

    public function getAuthIdentifierName()
    {
        return 'id';
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function responses()
    {
        return $this->hasMany(Response::class);
    }
}
