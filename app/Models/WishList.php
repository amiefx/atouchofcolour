<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WishList extends Model
{
    protected $fillable = ['product_id', 'user_id', 'user_product_id'];

    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

}
