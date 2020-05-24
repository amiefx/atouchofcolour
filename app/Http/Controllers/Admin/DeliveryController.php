<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use Illuminate\Http\Request;

class DeliveryController extends Controller
{
    public function index()
    {
        return response()->json(['delivery' => Delivery::first()], 200);
    }

    public function store(Request $request)
    {
        $delivery = Delivery::create([
            'text' => $request->text,
        ]);
        return response()->json(['delivery' => $delivery], 200);
    }

    public function update(Request $request)
    {
        $delivery = Delivery::first();
        $delivery->text = $request->text;
        $delivery->save();
        return response()->json(['delivery' => $delivery], 200);
    }
}
