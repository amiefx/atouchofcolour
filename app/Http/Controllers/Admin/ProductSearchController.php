<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Models\Product;

class ProductSearchController extends Controller
{
    public function show(Request $request, $id)
    {
        // $per_page = $request->per_page ? $request->per_page : 5;
        // $sortBy = $request->sort_by;
        // $orderBy = $request->order_by;
        // $users = Product::where('name', 'LIKE', "%$id%")->orderBy($sortBy, $orderBy)->paginate(5);
        // return response()->json(['users'=> $users], 200);

        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'id';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        $products = Product::where('name', 'LIKE', "%$id%");
        return response()->json([
            'products' => new ProductCollection($products->orderBy($sortBy, $orderBy)->paginate($per_page))
        ], 200);

        // $product = Product::where('slug', $slug)->firstOrFail();
        // return response()->json(['product' => new ProductResource($product)], 200);

    }
}
