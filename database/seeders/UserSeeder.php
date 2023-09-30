<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;
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
      'company' => '管理者',
      'department' => '本部',
      'name' => 'admin',
      'email' => 'admin@cultivate-survey.com',
      'password' => Hash::make('cultivate1109'),
      'role' => 'admin',
      'start_date' => Carbon::parse('2023-09-01'),
      'end_date' => Carbon::parse('2023-09-10'),
      'token' => Str::uuid(),
    ]);
  }
}
