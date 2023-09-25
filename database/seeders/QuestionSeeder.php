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
          ];
        }
      }

      $questions[] = [
        'form_id' => 7,
        'title' => '最も自社や自組織らしさを体現していると思う人は誰ですか？3名ほど挙げてみてください。メモ程度で結構です。',
        'type' => 'text',
        'status' => 'draft',
      ];
      $questions[] = [
        'form_id' => 7,
        'title' => '上記で選んだ人たちに共通する要素や特に際立っている特徴は何ですか？ 50文字程度でご記入ください。',
        'type' => 'textarea',
        'status' => 'draft',
      ];
      $questions[] = [
        'form_id' => 7,
        'title' => '上記の要素や特徴にまつわる自社や自組織らしさを示すエピソードを200文字程度でご記入ください。',
        'type' => 'textarea',
        'status' => 'draft',
      ];
      $questions[] = [
        'form_id' => 8,
        'title' => '最も共感している「言葉」',
        'type' => 'text',
        'status' => 'draft',
      ];
      $questions[] = [
        'form_id' => 8,
        'title' => '上記の言葉を選んだ理由を200文字程度でご記入ください。',
        'type' => 'textarea',
        'status' => 'draft',
      ];
      DB::table('questions')->insert($questions);
    }
}
