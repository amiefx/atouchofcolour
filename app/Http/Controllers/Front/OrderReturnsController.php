<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\OrderReturn;
use Illuminate\Http\Request;

class OrderReturnsController extends Controller
{
    public function index()
    {
        return response()->json(['oreder_return' => OrderReturn::first()], 200);
    }
}
