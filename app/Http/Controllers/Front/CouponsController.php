<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\coupon;
use Illuminate\Http\Request;

class CouponsController extends Controller
{

    public function getCoupon(Request $request)
    {
        $coupon = coupon::where('code', $request->coupon_apply)->where('is_active', true)->first();
        $total = $request->total;
       // return $coupon;
        if(!$coupon) {
            return response()->json(['text' => 'Invalid coupon!'], 422);
        }

        return response()->json([
            'coupon_name' => $coupon->code,
            'discount' => $coupon->discount($total)
        ], 200);
    }
}
