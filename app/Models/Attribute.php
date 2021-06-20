<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Attribute_set;

class Attribute extends Model
{
    protected $fillable = [
        'name',
        'attribute_sets_id',
        'order'
    ];

    public function attributeSet(){
        return $this->belongsTo(Attribute_set::class);
    }

    public function product_sizes(){
        return $this->hasMany(Product_size::class, 'attributes_id', 'id' );
    }
}
