<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\OrderReturn;
use Illuminate\Http\Request;

class OrderReturnsController extends Controller
{
    public function index()
    {
        return response()->json(['oreder_return' => OrderReturn::first()], 200);
    }

    public function store(Request $request)
    {
        $oreder_return= OrderReturn::create([
            'text' => $request->text,
        ]);
        return response()->json(['oreder_return' => $oreder_return], 200);
    }

    public function update(Request $request)
    {
        $oreder_return= OrderReturn::first();
        $oreder_return->text = $request->text;
        $oreder_return->save();
        return response()->json(['oreder_return' => $oreder_return], 200);
    }
}
