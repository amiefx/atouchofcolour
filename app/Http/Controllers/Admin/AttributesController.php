<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use Illuminate\Http\Request;

class AttributesController extends Controller
{
    public function index()
    {
       // return response()->json(['attributes' => Attribute::with('product_sizes')->get()], 200);
       return response()->json(['attributes' => Attribute::all()], 200);
    }

    public function store(Request $request)
    {
        $attribute = Attribute::create([
            'name' => $request->name,
            'attribute_sets_id' => $request->attribute_sets_id,
            'order' => $request->order,
        ]);
        return response()->json(['attribute' => $attribute], 200);
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
        $attribute = Attribute::find($id);
        $attribute->name = $request->name;
        $attribute->attribute_sets_id = $request->attribute_sets_id;
        $attribute->order = $request->order;
        $attribute->save();
        return response()->json(['attribute' => $attribute], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $attribute = Attribute::find($id)->delete();
        return response()->json(['attribute' => $attribute], 200);
    }
}
