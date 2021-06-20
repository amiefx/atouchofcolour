<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Message;

class MessagesController extends Controller
{
    public function index()
    {
        return response()->json(['messages' => Message::all()], 200);
    }

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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $message = Message::find($id);
        $message->reply = 1;
        $message->save();
        return response()->json(['message' => $message], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $message = Message::find($id)->delete();
        return response()->json(['message' => $message], 200);
    }
}
