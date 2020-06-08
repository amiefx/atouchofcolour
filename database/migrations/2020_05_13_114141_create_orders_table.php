<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->string('customer_email');
            $table->string('customer_phone')->nullable();
            $table->string('shipping_first_name');
            $table->string('shipping_last_name');
            $table->string('shipping_address');
            $table->string('shipping_appartment');
            $table->string('shipping_city');
            $table->string('shipping_country_region');
            $table->string('shipping_postal_code');
            $table->string('shipping_method');
            $table->string('billing_first_name');
            $table->string('billing_last_name');
            $table->string('billing_address');
            $table->string('billing_appartment');
            $table->string('billing_city');
            $table->string('billing_country_region');
            $table->string('billing_postal_code');
            $table->string('payment_method');
            $table->string('currency_symbol');
            $table->string('shipping_cost')->nullable();
            $table->string('coupon')->nullable();
            $table->integer('discount')->nullable();
            $table->string('total');
            $table->string('status')->default('pending');
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('users')->onCascade('delete');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
