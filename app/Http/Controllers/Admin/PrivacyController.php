<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Privacy;
use Illuminate\Http\Request;

class PrivacyController extends Controller
{
    public function index()
    {
        return response()->json(['privacy' => Privacy::first()], 200);
    }

    public function store(Request $request)
    {
        $privacy = Privacy::create([
            'text' => $request->text,
        ]);
        return response()->json(['privacy' => $privacy], 200);
    }

    public function update(Request $request)
    {
        $privacy = Privacy::first();
        $privacy->text = $request->text;
        $privacy->save();
        return response()->json(['privacy' => $privacy], 200);
    }
}
