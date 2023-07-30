<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
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
            $table->string("product_name");
            $table->string("product_desc");
            $table->string("product_image");
            $table->float("product_price");
            $table->timestamps();
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->id("category_id");
            $table->string("category_desc");
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
