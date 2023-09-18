<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SurveySheeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      DB::table('surveys')->insert([
        'client_admin_id' => 1,
        'title' => 'アンケート',
        'status' => 'draft',
      ]);
    }
}
