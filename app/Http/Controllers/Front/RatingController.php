<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\RatingResource;
use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function index()
    {
        //return response(['attribute_sets' => AttributeSetResource::collection(Attribute_set::all())], 200);
        return RatingResource::collection(Rating::get()->orderBy('created_at', 'desc'));
        //return response()(['reviews' => RatingResource::collection(Rating::where('approved', false)->orderBy('created_at', 'desc')->get())], 200);
    }

    public function testimonials()
    {
        $reviews = Rating::where([['approved', '=', 1], ['testimonial', '=', 1]])->get();
        return response()->json([
            'testimonials' => $reviews,
         ], 200);
    }

    public function all()
    {

        $reviews = Rating::where('approved', '=', 1)->get();
        $reviews_paginated = Rating::where('approved', '=', 1)->paginate(6);
        $stars =  $reviews->average('rating');
        $total_review =  $reviews->count();
        $stars5 =  $reviews->where('rating', '=', 5)->count();
        $stars4 =  $reviews->where('rating', '=', 4)->count();
        $stars3 =  $reviews->where('rating', '=', 3)->count();
        $stars2 =  $reviews->where('rating', '=', 2)->count();
        $star1 =  $reviews->where('rating', '=', 1)->count();
        return response()->json([
            'reviews' => $reviews_paginated,
            'stars' => $stars,
            'total_review' => $total_review,
            'stars5' => $stars5,
            'stars4' => $stars4,
            'stars3' => $stars3,
            'stars2' => $stars2,
            'star1' => $star1,
         ], 200);
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

        $rating = new Rating([
            'name' => $request->name,
            'email' => $request->email,
            'product_id' => $request->product_id,
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
       // logger($users);
       // $orders = Rating::where('customer_id', $users)->get(['id', 'status', 'created_at', 'total', 'currency_symbol']);

       $reviews =  Rating::with(array('product'=>function($query){
        $query->select('id', 'slug', 'name', 'image1');
        }))->where('user_id', $users)->get();

       return response()->json(['reviews' => $reviews], 200);
    }
}
