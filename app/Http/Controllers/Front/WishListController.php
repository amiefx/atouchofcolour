<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\WishList;
use Illuminate\Http\Request;

class WishListController extends Controller
{
    public function store(Request $request)
    {
        $user_product_id = auth()->user()->id .'-'. $request->product_id;

        $wishlist = WishList::create([
            'user_id' => auth()->user()->id,
            'product_id' => $request->product_id,
            'user_product_id' => $user_product_id
        ]);
        return response()->json(['wishlist' => $wishlist], 200);
    }

    public function myReviews()
    {
        $users = auth()->user()->id;
        logger($users);
       // $orders = Rating::where('customer_id', $users)->get(['id', 'status', 'created_at', 'total', 'currency_symbol']);

       $reviews =  Rating::with(array('product'=>function($query){
        $query->select('id', 'slug', 'name', 'image1');
        }))->where('user_id', $users)->get();

       return response()->json(['reviews' => $reviews], 200);
    }


}
