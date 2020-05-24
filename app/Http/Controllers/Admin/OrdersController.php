<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by;
        $orderBy = $request->order_by;
        return response()->json([
            'orders' => Order::orderBy($sortBy, $orderBy)->paginate($per_page) ,
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {

        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'id';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $orders = Order::where('billing_first_name', 'LIKE', "%$id%")
                        ->orWhere('status', 'LIKE', "%$id%")
                        ->orWhere('customer_email', 'LIKE', "%$id%");
        return response()->json([
            'orders' => $orders->orderBy($sortBy, $orderBy)->paginate($per_page) ,
        ], 200);

    }

    public function changeStatus(Request $request)
    {
        $status = $request->status;
        $order = Order::find($request->order);
        $order->status = $status;
        $order->save();
        return response()->json(['order' => $order], 200);
    }

    public function singleOrder($id)
    {
        $order = Order::with('orderItems')->where('id', $id)->firstOrFail();
        return response()->json(['order' => $order], 200);
    }

}
