<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Social;
use Illuminate\Http\Request;

class SocialController extends Controller
{
    public function index()
    {
        return response()->json(['social' => Social::all()], 200);
    }

    public function store(Request $request)
    {
        $social = Social::create([
            'name' => $request->name,
            'icon' => $request->icon,
            'link' => $request->link,
            'color' => $request->color,
        ]);
        return response()->json(['social' => $social], 200);
    }

    public function update(Request $request, $id)
    {
        $social = Social::find($id);

        $social->update([
            'name' => $request->name,
            'link' => $request->link,
            'icon' => $request->icon,
            'color' => $request->color,
        ]);
        return response()->json(['social' => $social], 200);
    }

    public function destroy($id)
    {
        $social = Social::find($id)->delete();
        return response()->json(['social' => $social], 200);
    }
}
