<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductIndexResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::with('ratings')->paginate(9);
        return ProductIndexResource::collection($products);
    }

    public function show(Product $product)
    {
        $product->load(['ratings', 'product_sizes']);
        return new ProductResource(
            $product
        );
    }

    public function categories(Request $request, $slug)
    {
        $category_id = Category::where('slug', $slug)->firstOrFail()->id;
        $sortBy = $request->sort_by;
        $orderBy = $request->order_by;

        $products = Product::with(['ratings', 'product_sizes', 'category'])->where('is_active', true)
            ->where('category_id', '=', $category_id)
            ->orderBy($sortBy, $orderBy)
            ->paginate(3);

        return new ProductCollection($products);

    }

    public function getHomeProducts()
    {
        $products = cache()->remember('home_prod', 60*60, function() {
            return ProductIndexResource::collection(Product::with(['ratings'])->where([['is_active', true], ['in_stock', true]])->orderByDesc('id')->paginate(12));
        });

        // $total_products = $products->count();
        // if ($total_products < 10) {
        //     $total = $total_products;
        // } else {
        //     $total = 10;
        // }

       return $products;
    }

    public function getRelatedProducts($slug)
    {
        $product_category = Product::where('slug', $slug)->firstOrFail()->category_id;

        $products = ProductResource::collection(Product::with(['ratings', 'product_sizes', 'category'])->where('is_active', true)->where('category_id', '=', $product_category)->get());
        $total_products = $products->count();
        if ($total_products < 4) {
            $total = $total_products;
        } else {
            $total = 4;
        }

        return $products->random($total);

    }
}
