<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use Illuminate\Http\Request;

class ShippingController extends Controller
{
    public function index()
    {
        return response()->json(['shipping' => Shipping::all()], 200);
    }

    public function store(Request $request)
    {
        $shipping = Shipping::create([
            'name' => $request->name,
            'amount' => $request->amount,
            'type' => $request->type,
        ]);
        return response()->json(['shipping' => $shipping], 200);
    }

    public function update(Request $request, $id)
    {
        $shipping = Shipping::find($id);

        $shipping->update([
            'name' => $request->name,
            'amount' => $request->amount,
            'type' => $request->type,
        ]);
        return response()->json(['shipping' => $shipping], 200);
    }

    public function destroy($id)
    {
        $shipping = Shipping::find($id)->delete();
        return response()->json(['shipping' => $shipping], 200);
    }
}
