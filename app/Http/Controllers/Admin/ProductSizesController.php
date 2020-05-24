<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product_size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductSizesController extends Controller
{
    public function index(Request $request)
    {
        $result1 = DB::query()
            ->select([
                'ps.*', 'atr.name', 'atrs.name as set_name', 'atr.order',
            ])
            ->from('product_sizes as ps')
            ->join('attributes as atr', 'ps.attributes_id', '=', 'atr.id')
            ->join('attribute_sets as atrs', 'atr.attribute_sets_id', '=', 'atrs.id');

        $result = DB::query()
            ->select('result1.*')
            ->fromSub($result1, 'result1')
            ->get();

        $sizes = $result->groupBy('set_name', 'product_id', 'id')
            ->sortBy('order');

        return response()->json(['sizes' =>  $sizes], 200);
    }

    public function show($id)
    {
        $result1 = DB::query()
            ->select([
                'ps.*', 'atr.name', 'atrs.name as set_name', 'atr.order',
            ])
            ->from('product_sizes as ps')
            ->join('attributes as atr', 'ps.attributes_id', '=', 'atr.id')
            ->join('attribute_sets as atrs', 'atr.attribute_sets_id', '=', 'atrs.id');

        $result = DB::query()
            ->select('result1.*')
            ->fromSub($result1, 'result1')
            ->get();

        $sizes = $result->where('product_id', '=', $id)
            ->groupBy('set_name', 'product_id', 'id')
            ->sortBy('order');

        return response()->json(['sizes' =>  $sizes], 200);
    }

    public function multiUpdate(Request $request)
    {
        $sizes = $request->all();

            foreach( $sizes as $size )
            {

                $invoice = Product_size::updateOrCreate(['id' => $size['id']],
					[
						'xs' => $size['xs'],
					]);
            }

        return true;
    }
}
