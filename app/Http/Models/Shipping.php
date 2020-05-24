<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use NumberFormatter;
use Money\Currency;
use Money\Money;
use Money\Formatter\IntlMoneyFormatter;
use Money\Currencies\ISOCurrencies;

class Shipping extends Model
{
    protected $fillable = [
        'name',
        'amount',
        'type'
    ];

    public function getAmount2Attribute()
    {
        $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
      //  $user_location = geoip()->getLocation('45.116.232.34');
        $currency = $user_location->currency;

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

        return new Money($this->amount, new Currency($symbol));
    }

    public function getFormattedFeesAttribute()
    {
        $formatter = new IntlMoneyFormatter(
            new NumberFormatter('en_GB', NumberFormatter::CURRENCY),
            new ISOCurrencies()
        );

        return $formatter->format($this->amount2);
    }

    public function getSymbolAttribute()
    {
        $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
        $currency = $user_location->currency;

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

        return $symbol;
    }
}
