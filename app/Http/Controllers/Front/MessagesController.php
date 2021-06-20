<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Message;

class MessagesController extends Controller
{
    public function store(Request $request)
    {
        $message = Message::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message
        ]);
        return response()->json(['message' => $message], 200);
    }
}
