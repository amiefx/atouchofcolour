<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\WishList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WishListController extends Controller
{
    public function index()
    {
        $users = auth()->user()->id;
        $wishlist = DB::query()
            ->select([
                'wl.*', 'pd.name', 'pd.slug', 'pd.image1',
            ])
            ->from('wish_lists as wl')
            ->join('products as pd', 'wl.product_id', '=', 'pd.id')
            ->where('user_id', $users)->get();

        return response()->json(['wishlist' =>  $wishlist], 200);
    }

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

    public function destroy($id)
    {
        $wishlist = WishList::find($id)->delete();
        return response()->json(['wishlist' => $wishlist], 200);
    }


}
