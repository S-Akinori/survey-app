<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    //
    DB::table('users')->insert([
      'company' => '共通質問管理用',
      'department' => '本部',
      'name' => '管理者',
      'email' => 'test@test.com',
      'password' => Hash::make('test1234'),
      'start_date' => Carbon::parse('2023-09-01'),
      'end_date' => Carbon::parse('2023-09-10'),
    ]);
  }
}
