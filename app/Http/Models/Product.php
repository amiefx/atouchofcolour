<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use NumberFormatter;
use Money\Currency;
use Money\Money;
use Money\Formatter\IntlMoneyFormatter;
use Money\Currencies\ISOCurrencies;

class Product extends Model
{

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $fillable = [
        'name',
        'slug',
        'category_id',
        'description',
        'isActive',
        'price_pkr',
        'price_usd',
        'price_aud',
        'price_eur',
        'price_gbp',
        'special_price_percentage',
        'special_price_start',
        'special_price_end',
        'image1',
        'image2',
        'image3',
        'image4',
        'image5',
        'image6',
        'new_from',
        'new_to',
        'short_description'
    ];

    public function product_sizes()
    {
        return $this->hasMany(Product_size::class);
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getPriceAttribute()
    {
        $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
      //  $user_location = geoip()->getLocation('45.116.232.34');
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

        // symbol
        $symbol = null;

        if ( $currency == "PKR") {
            $symbol = 'PKR';
        } elseif ($currency == "EUR") {
            $symbol = 'EUR';
        } elseif ($currency == "AUD") {
            $symbol = 'AUD';
        } elseif ($currency == "GBP") {
            $symbol = 'GBP';
        } else {
            $symbol = 'USD';
        }

        return new Money($price, new Currency($symbol));
    }

    public function getSymbolAttribute()
    {
        $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
       // $user_location = geoip()->getLocation('195.208.218.98');
        $currency = $user_location->currency;
        $symbol = null;

        if ( $currency == "PKR") {
            $symbol = 'Rs';
        } elseif ($currency == "EUR") {
            $symbol = '€';
        } elseif ($currency == "AUD") {
            $symbol = 'A$.';
        } elseif ($currency == "GBP") {
            $symbol = '£';
        } else {
            $symbol = 'US$';
        }

        return $symbol;
    }

    public function getFormattedPriceAttribute()
    {
        $formatter = new IntlMoneyFormatter(
            new NumberFormatter('en_GB', NumberFormatter::CURRENCY),
            new ISOCurrencies()
        );

        return $formatter->format($this->price);
    }

    public function getPrice2Attribute()
    {
        $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
      //  $user_location = geoip()->getLocation('45.116.232.34');
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
