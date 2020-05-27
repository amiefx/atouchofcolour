<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Jobs\SendOrderTransactionMail;
use App\Mail\OrderPlaced;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

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

    public function store(Request $request)
    {
        $postData = $request->all();

        try {
            DB::beginTransaction();

            $order = new Order($postData['orderDetails']);
            $order->save();

            $items = $postData['orderedItems'];

            foreach ($items as $item) {

                // if ($item['type']) {
                //     $type = $item['type'];
                // } else {
                //     $type = 'Unstitched';
                // }

                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['product']['id'],
                    'product_name' => $item['product']['name'],
                    'type' => $item['type'],
                    'size' => $item['size'],
                    'custom_size' => $item['customSize'],
                    'currency_symbol' => $item['product']['symbol'],
                    'unit_price' => $item['product']['price'],
                    'qty' => $item['quantity'],
                    'line_total' => ($item['product']['price']) * ($item['quantity']),
                ]);

            }

            Mail::send(new OrderPlaced($order));
          // SendOrderTransactionMail::dispatch($order)->delay(now()->addMinutes(1));

            DB::commit();
        } catch (\Throwable $th) {
            throw $th;
            DB::rollback();

            return response()->json(['error' => $th->getMessage()], 500);
        }

        return response()->json($order, 200);
    }

    public function myOrders()
    {
        $users = auth('api')->user()->id;
        logger($users);
        $orders = Order::where('customer_id', $users)->get(['id', 'status', 'created_at', 'total', 'currency_symbol']);
        return response()->json(['orders' => $orders], 200);
    }

    public function mySingleOrder($id)
    {
        $user = auth('api')->user()->id;
        $order = Order::with('orderItems')->where('id', $id)->where('customer_id', $user)->firstOrFail();
        return response()->json(['order' => $order], 200);

        // $orders2 =  $order->with(array('orderItems'=>function($query){
        //     $query->select('id', 'product_name', 'unit_price', 'qty', 'line_total');
        //     }))->get();


        //    return response()->json(['order' => $orders2], 200);
    }

    public function singleOrder($id)
    {

        $order = Order::with('orderItems')->where('id', $id)->firstOrFail();
        return response()->json(['order' => $order], 200);

    }

    public function changeStatus(Request $request)
    {
        $status = $request->status;
        $order = Order::find($request->order);
        $order->status = $status;
        $order->save();
        return response()->json(['order' => $order], 200);
    }
}
