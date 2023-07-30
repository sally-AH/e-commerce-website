<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $min = 1;
        $max = 4;
        $randomNumber = random_int($min, $max);

        DB::table('products')->insert([
            'category_id' => $randomNumber,
            'product_name' => Str::random(10),
            'product_desc' => Str::random(10),
            'product_image' => Str::random(10),
            'product_price' => rand(100, 1000),
        ]);
    }
}
