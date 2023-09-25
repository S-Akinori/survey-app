<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $titles = [
        'あなたの会社の【仕事観】は、「A」と「B」どちらに近いですか。',
        'あなたの会社の【組織観】は、「A」と「B」どちらに近いですか。',
        'あなたの会社の【市場観】は、「A」と「B」どちらに近いですか。',
        'あなたの会社の【制度】は、「A」と「B」どちらに近いですか。',
        'あなたの会社の【技術】は、「A」と「B」どちらに近いですか。',
        'あなたの会社の【会議】は、「A」と「B」どちらに近いですか。',
      ];

      $questions = [];

      for($i = 0; $i < 6; $i++) {
        for($j = 0; $j < 6; $j++) {
          $questions[] = [
            'form_id' => ($i+1),
            'title' => '【Q'.($j+1).'】'. $titles[$i],
            'type' => 'scale',
            'status' => 'draft',
            'required' => 'true',
          ];
        }
      }
      DB::table('questions')->insert($questions);
    }
}
