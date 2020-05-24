<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\HomeSlideResource;
use App\Models\HomeSlide;
use Illuminate\Http\Request;

class HomeSlidesController extends Controller
{
    public function index()
    {
        return response()->json([
            'homeslides' => HomeSlideResource::collection(HomeSlide::active()->get()),
        ], 200);
    }
}
