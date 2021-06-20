<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\RatingResource;
use App\Models\Rating;
use Illuminate\Http\Request;

class RatingsController extends Controller
{
    public function index()
    {
        //return response(['attribute_sets' => AttributeSetResource::collection(Attribute_set::all())], 200);
        return RatingResource::collection(Rating::orderBy('id', 'asc')->get());
        //return response()(['reviews' => RatingResource::collection(Rating::where('approved', false)->orderBy('created_at', 'desc')->get())], 200);
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

    
    public function delete($id)
    {
        dd($id);
        $review = Rating::find($id)->delete();
        return response()->json(['review' => new RatingResource($review)], 200);
    }

    public function approve($id)
    {
        $review = Rating::find($id);
        $review->approved = true;
        $review->save();
        return response()->json(['review' => new RatingResource($review)], 200);
    }

    public function approveTestimonial($id)
    {
        $review = Rating::find($id);
        $review->testimonial = true;
        $review->save();
        return response()->json(['review' => new RatingResource($review)], 200);
    }

    public function myReviews()
    {
        $users = auth()->user()->id;
        logger($users);
       // $orders = Rating::where('customer_id', $users)->get(['id', 'status', 'created_at', 'total', 'currency_symbol']);

       $reviews =  Rating::with(array('product'=>function($query){
        $query->select('id', 'name', 'image1');
        }))->where('user_id', $users)->get();

       return response()->json(['reviews' => $reviews], 200);
    }
}
