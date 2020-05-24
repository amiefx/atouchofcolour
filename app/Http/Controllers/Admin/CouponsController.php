<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\coupon;
use Illuminate\Http\Request;

class CouponsController extends Controller
{
    public function index()
    {
        return response()->json(['coupons' => Coupon::all()], 200);
    }

    public function store(Request $request)
    {
        $coupon = Coupon::create([
            'code' => $request->code,
            'type' => $request->type,
            'value' => $request->value,
            'percent_off' => $request->percent_off,
            'is_active' => $request->is_active,
        ]);
        return response()->json(['coupon' => $coupon], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $coupon = Coupon::find($id);
        $coupon->code = $request->code;
        $coupon->type = $request->type;
        $coupon->value = $request->value;
        $coupon->percent_off = $request->percent_off;
        $coupon->is_active = $request->is_active;
        $coupon->save();
        return response()->json(['coupon' => $coupon], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $coupon = coupon::find($id)->delete();
        return response()->json(['coupon' => $coupon], 200);
    }

    public function getCoupon(Request $request)
    {
        $coupon = Coupon::where('code', $request->coupon_apply)->where('is_active', true)->first();
        $total = $request->total;

        if(!$coupon) {
            return response()->json(['text' => 'Invalid coupon!'], 422);
        }

        return response()->json([
            'coupon_name' => $coupon->code,
            'discount' => $coupon->discount($total)
        ], 200);
    }
}
