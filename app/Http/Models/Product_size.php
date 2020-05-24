<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Attribute;

class Product_size extends Model
{
    protected $fillable = [
        'product_id',
        'attribute_sets_id',
        'attributes_id',
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    public function attribute(){
        return $this->belongsTo(Attribute::class, 'attributes_id', 'id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
