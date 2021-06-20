<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Rating extends Model
{
    protected $fillable = [
        'name', 'email', 'rating', 'title', 'body'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
