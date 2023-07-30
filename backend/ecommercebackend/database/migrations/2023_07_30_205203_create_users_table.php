<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id("product_id");
            $table->integer("category_id");
            $table->integer("product_name");
            $table->integer("product_desc");
            $table->integer("product_image");
            $table->integer("product_price");
            $table->timestamps();
        });
        
        Schema::create('categories', function (Blueprint $table) {
            $table->id("category_id");
            $table->integer("category_desc");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
        Schema::dropIfExists('categories');
    }
}
