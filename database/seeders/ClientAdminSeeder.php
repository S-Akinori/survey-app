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
          'company' => '株式会社ABC',
          'department' => '本部',
          'name' => '山田太郎',
          'email' => 'abc@abc.com',
          'password' => Hash::make('abcd1234'),
          'start_date' => Carbon::parse('2023-09-01'),
          'end_date' => Carbon::parse('2023-09-10'),
        ]);
    }
}