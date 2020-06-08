<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id');
            $table->string('name');
            $table->string('email');
            $table->integer('rating');
            $table->string('title');
            $table->longText('body');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->boolean('approved')->default(false);
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('products')->onCascade('delete');
            $table->foreign('user_id')->references('id')->on('users')->onCascade('delete');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ratings');
    }
}
