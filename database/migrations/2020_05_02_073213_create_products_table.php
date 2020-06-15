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
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('slug')->unique();
            $table->unsignedBigInteger('category_id');
            $table->longText('description')->nullable();
            $table->boolean('is_active')->default(false);
            $table->integer('price_pkr');
            $table->integer('price_usd');
            $table->integer('price_aud');
            $table->integer('price_eur');
            $table->integer('price_gbp');
            $table->integer('stitched_price_pkr');
            $table->integer('stitched_price_usd');
            $table->integer('stitched_price_aud');
            $table->integer('stitched_price_eur');
            $table->integer('stitched_price_gbp');
            $table->boolean('in_stock')->default(true);
            $table->string('special_price_percentage')->nullable();
            $table->date('special_price_start')->nullable();
            $table->date('special_price_end')->nullable();
            $table->string('image1')->default('images/product_image.png');
            $table->string('image2')->default('images/product_image.png');
            $table->string('image3')->nullable();
            $table->string('image4')->nullable();
            $table->string('image5')->nullable();
            $table->string('image6')->nullable();
            $table->date('new_from')->nullable();
            $table->date('new_to')->nullable();
            $table->text('short_description')->nullable();
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onCascade('delete');
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
    }
}
