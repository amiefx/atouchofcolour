<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        return response()->json(['about' => About::first()], 200);
    }

    public function store(Request $request)
    {
        $about = About::create([
            'text' => $request->text,
        ]);
        return response()->json(['about' => $about], 200);
    }

    public function update(Request $request)
    {
        $about = About::first();
        $about->text = $request->text;
        $about->save();
        return response()->json(['about' => $about], 200);
    }
}
