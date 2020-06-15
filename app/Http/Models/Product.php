<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use NumberFormatter;
use Money\Currency;
use Money\Money;
use Money\Formatter\IntlMoneyFormatter;
use Money\Currencies\ISOCurrencies;
use phpDocumentor\Reflection\Types\Float_;

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
        'stitched_price_pkr',
        'stitched_price_usd',
        'stitched_price_aud',
        'stitched_price_eur',
        'stitched_price_gbp',
        'in_stock',
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

    public function getNewAttribute()
    {
        $today = date('Y-m-d');
        if ($this->new_from && $this->new_to) {

          return ($today >= $this->new_from && $today <= $this->new_to) ? true : false ;
        } else {
            return false;
        }
    }

    public function getOfferAttribute()
    {
        $today = date('Y-m-d');
        if ($this->special_price_start && $this->special_price_end) {

            return ($today >= $this->special_price_start && $today <= $this->special_price_end) ? $this->special_price_percentage/100 : 0 ;
        } else {
              return 0;
          }
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
      //  $user_location = geoip()->getLocation('45.116.232.34');
        $currency = $user_location->currency;

        $symbol = null;
        if ( $currency == "PKR") {
            $symbol = 'Rs';
        } elseif ($currency == "EUR") {
            $symbol = '€';
        } elseif ($currency == "AUD") {
            $symbol = 'A$';
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
            new NumberFormatter('en_US', NumberFormatter::CURRENCY),
            new ISOCurrencies()
        );

        return $formatter->format($this->price);
    }

    public function getOfferPriceAttribute()
    {
        $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
      //  $user_location = geoip()->getLocation('45.116.232.34');
        $currency = $user_location->currency;

        $price = null;

        if ( $currency == "PKR") {
            $price = $this->price_pkr - ($this->price_pkr * $this->offer);
        } elseif ($currency == "EUR") {
            $price = $this->price_eur - ($this->price_eur * $this->offer);
        } elseif ($currency == "AUD") {
            $price = $this->price_aud - ($this->price_aud * $this->offer);
        } elseif ($currency == "GBP") {
            $price = $this->price_gbp - ($this->price_gbp  * $this->offer);
        } else {
            $price = $this->price_usd - ($this->price_usd * $this->offer);
        }

        $int = (int)$price;

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

        return new Money($int , new Currency($symbol));
    }

    public function getFormattedOfferAttribute()
    {
        $formatter = new IntlMoneyFormatter(
            new NumberFormatter('en_US', NumberFormatter::CURRENCY),
            new ISOCurrencies()
        );

        return $formatter->format($this->offer_price);
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

        return $price - ($price * $this->offer);
    }

    public function getStitchedPriceAttribute()
    {
        $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
      //  $user_location = geoip()->getLocation('45.116.232.34');
        $currency = $user_location->currency;
        $price = null;

        if ( $currency == "PKR") {
            $price = $this->stitched_price_pkr;
        } elseif ($currency == "EUR") {
            $price = $this->stitched_price_eur;
        } elseif ($currency == "AUD") {
            $price = $this->stitched_price_aud;
        } elseif ($currency == "GBP") {
            $price = $this->stitched_price_gbp;
        } else {
            $price = $this->stitched_price_usd;
        }

        return $price;
    }


}
