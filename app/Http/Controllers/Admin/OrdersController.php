<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\OrderCompleted;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
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

    public function changeStatus(Request $request)
    {
        $status = $request->status;
        $order = Order::find($request->order);
        $order->status = $status;
        $order->save();

        if ($status == 'Completed') {
            Mail::send(new OrderCompleted($order));
        }

        return response()->json(['order' => $order], 200);
    }

    public function singleOrder($id)
    {
        $order = Order::with('orderItems')->where('id', $id)->firstOrFail();
        return response()->json(['order' => $order], 200);
    }

    public function getOrderItemSize(Request $request)
    {

        $order_id = $request->order_id;
        $product_id = $request->product_id;

        $order = OrderItem::where([['order_id', $order_id], ['product_id', $product_id]])->firstOrFail();

        // $product = Product::where('id', '=', 1)->firstOrFail();

        // if ($order->size == 'Custom Size') {
        //     return response()->json(['order' => $order->id], 200);
        // } elseif ($order->size == 'S') {
        //     // return $product->with(array('product_sizes'=>function($query){
        //     //          $query->select('attributes_id', 'S');
        //     //          }))->get();
        //     return Product::where('id', '=', 1)->with('product_sizes')->get('id');
        // }

     //   $product_id = Product::where('slug', $slug)->firstOrFail()->id;

        if ($order->size == 'XS') {
            $result1 = DB::query()
                ->select([
                    'ps.*', 'atr.name', 'atrs.name as set_name', 'atr.order', 'ps.XS as size',
                ])
                ->from('product_sizes as ps')
                ->join('attributes as atr', 'ps.attributes_id', '=', 'atr.id')
                ->join('attribute_sets as atrs', 'atr.attribute_sets_id', '=', 'atrs.id');
        } elseif ($order->size == 'S') {
            $result1 = DB::query()
                ->select([
                    'ps.*', 'atr.name', 'atrs.name as set_name', 'atr.order', 'ps.S as size',
                ])
                ->from('product_sizes as ps')
                ->join('attributes as atr', 'ps.attributes_id', '=', 'atr.id')
                ->join('attribute_sets as atrs', 'atr.attribute_sets_id', '=', 'atrs.id');
        } elseif ($order->size == 'M') {
            $result1 = DB::query()
                ->select([
                    'ps.*', 'atr.name', 'atrs.name as set_name', 'atr.order', 'ps.M as size',
                ])
                ->from('product_sizes as ps')
                ->join('attributes as atr', 'ps.attributes_id', '=', 'atr.id')
                ->join('attribute_sets as atrs', 'atr.attribute_sets_id', '=', 'atrs.id');
        } elseif ($order->size == 'L') {
            $result1 = DB::query()
                ->select([
                    'ps.*', 'atr.name', 'atrs.name as set_name', 'atr.order', 'ps.L as size',
                ])
                ->from('product_sizes as ps')
                ->join('attributes as atr', 'ps.attributes_id', '=', 'atr.id')
                ->join('attribute_sets as atrs', 'atr.attribute_sets_id', '=', 'atrs.id');
        } elseif ($order->size == 'XL') {
            $result1 = DB::query()
                ->select([
                    'ps.*', 'atr.name', 'atrs.name as set_name', 'atr.order', 'ps.XL as size',
                ])
                ->from('product_sizes as ps')
                ->join('attributes as atr', 'ps.attributes_id', '=', 'atr.id')
                ->join('attribute_sets as atrs', 'atr.attribute_sets_id', '=', 'atrs.id');
        } else {
            return null;
        }

                $result = DB::query()
                    ->select('result1.*')
                    ->fromSub($result1, 'result1')
                    ->get();

                $sizes = $result->where('product_id', '=', $product_id)
                    ->groupBy('set_name', 'product_id', 'id')
                    ->sortBy('order');

                return response()->json(['sizes' =>  $sizes], 200);

    //    return response()->json(['order' => $order->id], 200);

    }

}
