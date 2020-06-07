<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotifyMe extends Model
{
    protected $fillable = [ 'mobile', 'email', 'product_slug', 'product_name' ];
}
