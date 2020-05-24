<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqsController extends Controller
{
    public function index()
    {
        return response()->json(['faq' => Faq::first()], 200);
    }

    public function store(Request $request)
    {
        $faq= Faq::create([
            'text' => $request->text,
        ]);
        return response()->json(['faq' => $faq], 200);
    }

    public function update(Request $request)
    {
        $faq= Faq::first();
        $faq->text = $request->text;
        $faq->save();
        return response()->json(['faq' => $faq], 200);
    }
}
