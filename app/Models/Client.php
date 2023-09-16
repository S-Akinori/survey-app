<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    // モデルが関連付けられているテーブル
    protected $table = 'clients';

    // マスアサインメントを避けるためにfillableまたはguardedを使用
    // この例ではfillableを使用
    protected $fillable = [
        'client_id', 'client_admin_id', 'created_at', 'updated_at'
    ];

    // created_atとupdated_atカラムのデフォルトの型はdatetimeですが、
    // もしカスタムのフォーマットが必要な場合は以下のように$castsプロパティを使用します。
    // protected $casts = [
    //     'created_at' => 'datetime:Y-m-d H:i:s',
    //     'updated_at' => 'datetime:Y-m-d H:i:s',
    // ];
}
