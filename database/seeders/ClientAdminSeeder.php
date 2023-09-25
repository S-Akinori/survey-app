<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ClientAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('client_admins')->insert([
          'company' => '共通質問用',
          'department' => '本部',
          'name' => '管理者',
          'email' => 'admin@admin.com',
          'password' => Hash::make('admin1234'),
          'start_date' => Carbon::parse('2023-09-01'),
          'end_date' => Carbon::parse('2023-09-10'),
        ]);
    }
}