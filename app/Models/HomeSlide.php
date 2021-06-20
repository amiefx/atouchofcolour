<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeSlide extends Model
{
    protected $fillable = [
        'name', 'link', 'is_active', 'large_image', 'small_image'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
