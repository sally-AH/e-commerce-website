<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'category_desc' => "screens"
        ]);
        DB::table('categories')->insert([
            'category_desc' => "phones"
        ]);
        DB::table('categories')->insert([
            'category_desc' => "laptops"
        ]);
        DB::table('categories')->insert([
            'category_desc' => "accessories"
        ]);
    }
}
