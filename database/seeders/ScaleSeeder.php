<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $texts = [
        [
          '結果に結びつく努力でなければ意味がない',
          '結果は出なくても努力することに意味がある'
        ],
        [
          '自由、権利、自立が価値観である',
          '学習、誠実、自律が価値観である'
        ],
        [
          '成果に応じて相応の報酬を与えるべきでる',
          '成果に応じて新しい機会を与えるべきである'
        ],
        [
          '会社のやるべきことをやることが大切だ',
          '自分のやりたいことをやることが大切だ'
        ],
        [
          '役割に応じて着実に成果を出すべきだ',
          '役割を超えてでも挑戦していくべきだ'
        ],
        [
          '誰かに報いるために自己研鑽が重要だ',
          '自由を獲得するために自己研鑽が重要だ'
        ],
        [
          '人間関係は感情よりも実利でつながるべきだ',
          '人間関係は実利よりも感情で繋がるべきだ'
        ],
        [
          '議論を通じた多数決で決める方が正しい判断ができる',
          '優秀なリーダーによる意思決定の方が正しい判断ができる'
        ],
        [
          'リーダーはメンバーの自主性を尊重することが重要だ',
          'リーダーはメンバーの行動を導くことが重要だ'
        ],
        [
          '価値は信念に照らして判断するべきである',
          '価値は実用性に沿って判断するべきである'
        ],
        [
          '理想の在り方を追求していくことが重要である',
          '状況に合わせて適切に変化することが重要である'
        ],
        [
          '秩序あるルールが組織を強くしていくはずだ',
          '柔軟なルールが組織を強くしていくはずだ'
        ],
        [
          '競合は互いに競争して価値を高めあう存在である',
          '競合は互いに切磋琢磨して市場を切り拓く存在である'
        ],
        [
          '顧客の潜在的な欲求は根源的には変わるものではない',
          '顧客の潜在的な欲求は時代と共に変化していくものである'
        ],
        [
          '成長には今ある市場をより深めていくことが大切だ',
          '成長にはまだ見ぬ市場を見つけ開拓することが大切だ'
        ],
        [
          '顧客からの要求に誠実に応えることが大切だ',
          '顧客からの要求をコントロールすることが大切だ'
        ],
        [
          '過去の成功法則にこそ成長のヒントがある',
          '過去の成功法則に縛られていたら成長できない'
        ],
        [
          '顧客の声こそが新しいサービスには不可欠だ',
          '良いアイデアこそが新しいサービスには不可欠だ'
        ],
        [
          '立場や評価に応じた大胆な報酬変動は少ない',
          '立場や評価に応じて報酬の変動性が高い'
        ],
        [
          '肩書と権威は必ずしも一致していない',
          '肩書と権威は一致していることが多い'
        ],
        [
          '立場によって責任は段階的に上がる',
          '立場によって責任は飛躍的に上がる'
        ],
        [
          '様々なプロセスを考慮して評価される要素が強い',
          'シンプルに結果で評価されている要素が強い'
        ],
        [
          '昇格降格や役割変更は穏やかに行われる',
          '昇格降格や役割変更は頻繁に行われる'
        ],
        [
          '組織の成果が評価されがちである',
          '個人の成果が評価されがちである'
        ],
        [
          '時代に左右されずに大切にされるものが多い',
          '時代に応じて変化していくものが多い'
        ],
        [
          '個々の社員が柔軟に変更できることは少ない',
          '個々の社員が状況に応じて柔軟に変更できる'
        ],
        [
          '確実に価値あるものを顧客に提供している',
          '顧客で試すことによって価値を磨いている'
        ],
        [
          'ある程度の成果は鍛錬を重ねることで得られる',
          'ある程度の成果は手順通り進めることで得られる'
        ],
        [
          '熟練した技術を磨き続ける人が評価される',
          '皆が使いこなせる技術を提示する人が評価される'
        ],
        [
          '優れた人の背中で学ぶことが多い',
          'ノウハウの共有で学ぶことが多い'
        ],
        [
          '決まったことを共有されることが多い',
          '決まっていないことを議論することが多い'
        ],
        [
          '過去の結果や決定に対しての報告が多い',
          '未来の展開に対しての意見交換が多い'
        ],
        [
          '会議の中で方針が変更になることは少ない',
          '会議の中で方針が変更されやすい'
        ],
        [
          '発言の機会は自由に与えられている',
          '意見を求められたときに発言できる'
        ],
        [
          '部下からの発言が尊重される',
          '上司からの発言が尊重される'
        ],
        [
          '会議内での役割はあまり決まっていない',
          '会議内での役割がある程度決まっている'
        ],
      ];

      $scales = [];
      for($i = 0; $i < count($texts); $i++) {
        $scales[] = [
          'question_id' => ($i+1),
          'min_text' => $texts[$i][0],
          'max_text' => $texts[$i][1],
          'min' => 1,
          'max' => 4,
          'step' => 1,
        ];
      }
        //
        DB::table('scales')->insert($scales);
    }
}
