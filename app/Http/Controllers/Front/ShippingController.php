<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\ShippingResource;
use App\Models\Shipping;
use Illuminate\Http\Request;

class ShippingController extends Controller
{
    public function index()
    {
        $symbol = Shipping::first()->symbol;

        if ($symbol == 'PKR') {
            $shipping = Shipping::where('type', 'local')->get();
        } else {
            $shipping = Shipping::where('type', 'international')->get();
        }

        return ShippingResource::collection(  $shipping );

      //  return response()->json(['shipping' => ShippingResource::collection(  $shipping )], 200);
    }
}
