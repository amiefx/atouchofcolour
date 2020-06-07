<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\NotifyResource;
use App\Mail\NotifyCustomer;
use App\Models\NotifyMe;
use Illuminate\Support\Facades\Mail;

class NotifyMeController extends Controller
{
    public function index()
    {
        return response()->json([
            'notify' => NotifyResource::collection(NotifyMe::where('reply', false)->get()),
        ], 200);
    }

    public function store(Request $request)
    {

        $notify = NotifyMe::create([
            'mobile' => $request->mobile,
            'email' => $request->email,
            'product_slug' => $request->product_slug,
            'product_name' => $request->product_name,
        ]);
        return response()->json(['notify' => $notify], 200);
    }

    public function reply($id)
    {
        $notify = NotifyMe::find($id);
        $notify->reply = true;
        $notify->save();

        if ($notify->email) {
            Mail::send(new NotifyCustomer($notify));
        }

        return response()->json(['review' => new NotifyResource($notify)], 200);
    }
}
