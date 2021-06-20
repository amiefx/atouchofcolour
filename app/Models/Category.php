<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $fillable = [
        'name', 'slug', 'order', 'parent_id', 'is_active', 'is_menu', 'is_home_section', 'image'
    ];

    public function scopeParents(Builder $builder)
    {
        $builder->whereNull('parent_id');
    }

    public function scopeOrdered(Builder $builder, $direction = 'asc')
    {
        $builder->orderBy('order', $direction);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', 1);
    }

    public function scopeHome($query)
    {
        return $query->where('is_home_section', true);
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id')->Where([
            'is_menu' => true,
            'is_active' => true
        ]);
    }

    public function products(){
        return $this->hasMany(Product::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getPriceAttribute()
    {
        $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
       // $user_location = geoip()->getLocation('195.208.218.98');
        $currency = $user_location->currency;
        $price = null;

        if ( $currency == "PKR") {
            $price = $this->price_pkr;
        } elseif ($currency == "EUR") {
            $price = $this->price_eur;
        } elseif ($currency == "AUD") {
            $price = $this->price_aud;
        } elseif ($currency == "GBP") {
            $price = $this->price_gbp;
        } else {
            $price = $this->price_usd;
        }

        return $price;
    }

}
