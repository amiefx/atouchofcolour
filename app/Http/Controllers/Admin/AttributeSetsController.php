<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\AttributeSetResource;
use App\Models\Attribute;
use App\Models\Attribute_set;
use Illuminate\Http\Request;

class AttributeSetsController extends Controller
{
    public function index()
    {
        return AttributeSetResource::collection(Attribute_set::all());
    }

    public function attribs()
    {
        return Attribute_set::orderBy('name', 'ASC')->get(['id', 'name']);
    }

    public function subattribs(Attribute_set $attribute_set)
    {
        return $attribute_set->attributes()->orderBy('order', 'ASC')->get(['id', 'name']);
    }

    public function getAttribs(Request $request)
    {
        $data = Attribute::where('attribute_sets_id', $request->attribute_sets_id)->get();

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $attribute_set = Attribute_set::create([
            'name' => $request->name,
            'order' => $request->order,
        ]);
        return response()->json(['attribute_set' => $attribute_set], 200);
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
        $attribute_set = Attribute_set::find($id);
        $attribute_set->name = $request->name;
        $attribute_set->order = $request->order;
        $attribute_set->save();
        return response()->json(['attribute_set' => $attribute_set], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $attribute_set = Attribute_set::find($id)->delete();
        return response()->json(['attribute_set' => $attribute_set], 200);
    }
}
