<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(UserSeeder::class);
        $this->call(AdminSeeder::class);
        // $this->call(ClientAdminSeeder::class);
        $this->call(SurveySheeder::class);
        $this->call(FormSeeder::class);
        $this->call(QuestionSeeder::class);
        $this->call(ScaleSeeder::class);
    }
}
