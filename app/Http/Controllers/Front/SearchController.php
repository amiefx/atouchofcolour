<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductIndexResource;
use App\Models\Product;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index()
    {
        $data = request()->validate([
            'searchTerm' => 'required',
        ]);

        $search = request()->searchTerm;

       // $products = Product::search($data['searchTerm'])->get();

        $products = Product::where('name', 'like', "%$search%")
            ->orWhere('description', 'like', "%$search%")->get();

        $products2 = $products->where('is_active', true);

        return ProductIndexResource::collection( $products2 );
    }
}
