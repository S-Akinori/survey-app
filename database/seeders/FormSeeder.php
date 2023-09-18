<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FormSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $titles = [
      'あなたの会社の【仕事観】についてお伺いします',
      'あなたの会社の【組織観】についてお伺いします',
      'あなたの会社の【市場観】についてお伺いします',
      'あなたの会社の【制度】についてお伺いします',
      'あなたの会社の【技術】についてお伺いします',
      'あなたの会社の【会議】についてお伺いします',
    ];

    $forms = [];
    for($i = 0; $i < 6; $i++) {
      $forms[] = [
        'survey_id' => 1,
        'title' => $titles[$i],
        'description' => '全6問',
        'status' => 'draft',
      ];
    }

    $forms[] = [
      'survey_id' => 1,
      'title' => '自社や自組織を体現している人の特徴についてお伺いします',
      'description' => '',
      'status' => 'draft',
    ];

    DB::table('forms')->insert($forms);
  }
}
