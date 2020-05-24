<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\RatingResource;
use App\Models\Product;
use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function index()
    {
        //return response(['attribute_sets' => AttributeSetResource::collection(Attribute_set::all())], 200);
        return RatingResource::collection(Rating::where('approved', false)->orderBy('created_at', 'desc')->get());
        //return response()(['reviews' => RatingResource::collection(Rating::where('approved', false)->orderBy('created_at', 'desc')->get())], 200);
    }

    public function show($slug)
    {
        $product_id = Product::where('slug', $slug)->firstOrFail()->id;

        $reviews = Rating::where([['approved', '=', 1], ['product_id', $product_id]])->get();
        $stars =  $reviews->average('rating');
        $total_review =  $reviews->count();
        return response()->json([
            'reviews' => $reviews,
            'stars' => $stars,
            'total_review' => $total_review,
         ], 200);
    }

    public function store(Request $request)
    {
        if ( isset(auth('api')->user()->id )) {
            $users_id = auth('api')->user()->id;
        } else {
            $users_id = null;
        }

        $rating = new Rating([
            'name' => $request->name,
            'email' => $request->email,
            'product_id' => $request->product_id,
            'user_id' => $users_id,
            'rating' => $request->rating,
            'title' => $request->title,
            'body' => $request->body,
        ]);
        $rating->save();
        return response()->json(['rating'=> $rating], 200);

    }

    public function approve($id)
    {
        $review = Rating::find($id);
        $review->approved = true;
        $review->save();
        return response()->json(['review' => new RatingResource($review)], 200);
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
