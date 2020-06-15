<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request[1];
        $from = $request[0];

        if( isset($to) ){
            $to = Carbon::parse($to)->format('Y-m-d') .' 23:59:59' ;
        } else {
            $to = $now;
        }

        if( isset($from) ){
            $from = Carbon::parse($from)->format('Y-m-d') .' 00:00:00' ;
        } else {
            $from = date("Y-01-01");
        }

        // Cards
        $orders = Order::where('created_at', '>=', $from)->where('created_at', '<=', $to)->where('currency_symbol', 'Rs')->get();
        $total = $orders->sum('total');
        $shipping = $orders->sum('shipping_cost');
        $discount = $orders->where('status', '=', 'Completed')->sum('total');
        $total_sales = $total + $shipping - $discount;
        $total_products = Product::where('created_at', '>=', $from)->where('created_at', '<=', $to)->where('is_active', true)->count('id');
        $total_customers = Order::where('created_at', '>=', $from)->where('created_at', '<=', $to)->distinct('customer_id')->count('customer_id');
        $total_orders = Order::where('created_at', '>=', $from)->where('created_at', '<=', $to)->count('id');

        // Charts
        $sales_monthly = Order::
        select(DB::raw('sum(total) as `sales`'), DB::raw("DATE_FORMAT(created_at, '%Y-%M') date"),  DB::raw('YEAR(created_at) year, MONTH(created_at) month'), 'currency_symbol')
        ->groupby('year','month', 'created_at', 'currency_symbol')->get()->take(-12);
        // ->pluck('sales','new_date')
        // ->take(-12);

        $sales_pkr = $sales_monthly->where('currency_symbol', 'Rs')->pluck('sales','date');
        $sales_eur = $sales_monthly->where('currency_symbol', '€')->pluck('sales','date');
        $sales_aud = $sales_monthly->where('currency_symbol', 'A$')->pluck('sales','date');
        $sales_gbp = $sales_monthly->where('currency_symbol', '£')->pluck('sales','date');
        $sales_usd = $sales_monthly->where('currency_symbol', 'US$')->pluck('sales','date');

        $orders_monthly = Order::
        select(DB::raw('count(id) as `orders`'), DB::raw("DATE_FORMAT(created_at, '%Y-%M') date"),  DB::raw('YEAR(created_at) year, MONTH(created_at) month'), 'currency_symbol')
        ->groupby('year','month', 'created_at', 'currency_symbol')
        ->pluck('orders','date')
        ->take(-12);

        $TopTenProducts = OrderItem::select(DB::raw('count(id) as `orders`'), 'product_name')->groupby('product_name')->pluck('orders','product_name');

        return response()->json([
            'total_sales' => $total_sales,
            'total_products' => $total_products,
            'total_customers' => $total_customers,
            'total_orders' => $total_orders,
            'sales_monthly' => $sales_monthly,
            'sales_pkr' => $sales_pkr,
            'sales_eur' => $sales_eur,
            'sales_aud' => $sales_aud,
            'sales_gbp' => $sales_gbp,
            'sales_usd' => $sales_usd,
            'orders_monthly' => $orders_monthly,
            'TopTenProducts' => $TopTenProducts

        ], 200);
    }

    public function report(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request[1];
        $from = $request[0];

        if( isset($to) ){
            $to = Carbon::parse($to)->format('Y-m-d') .' 23:59:59' ;
        } else {
            $to = $now;
        }

        if( isset($from) ){
            $from = Carbon::parse($from)->format('Y-m-d') .' 00:00:00' ;
        } else {
            $from = date("Y-01-01");
        }

        $prod_sales = DB::table('order_items')
        ->selectRaw(
            "SUM(CASE WHEN currency_symbol = 'Rs' THEN line_total ELSE 0 END) AS pkr, ".
            "SUM(CASE WHEN currency_symbol = 'A$' THEN line_total ELSE 0 END) AS aud, ".
            "SUM(CASE WHEN currency_symbol = 'US$' THEN line_total ELSE 0 END) AS usd, ".
            "SUM(CASE WHEN currency_symbol = '€' THEN line_total ELSE 0 END) AS eur, ".
            "SUM(CASE WHEN currency_symbol = '£' THEN line_total ELSE 0 END) AS gbp,
            SUM(qty) as qty,
            product_id, product_name, type"
            )
        ->where('created_at', '>=', $from)->where('created_at', '<=', $to)
        ->groupBy('product_name', 'type')
        ->orderByDesc('qty')
        ->get();

        $coupons = DB::table('orders')
        ->selectRaw(
            "SUM(CASE WHEN currency_symbol = 'Rs' THEN discount ELSE 0 END) AS pkr, ".
            "SUM(CASE WHEN currency_symbol = 'A$' THEN discount ELSE 0 END) AS aud, ".
            "SUM(CASE WHEN currency_symbol = 'US$' THEN discount ELSE 0 END) AS usd, ".
            "SUM(CASE WHEN currency_symbol = '€' THEN discount ELSE 0 END) AS eur, ".
            "SUM(CASE WHEN currency_symbol = '£' THEN discount ELSE 0 END) AS gbp,
            COUNT(DISTINCT id) as orders,
            coupon"
            )
        ->where('created_at', '>=', $from)->where('created_at', '<=', $to)
        ->where('status', '=', 'Completed')
        ->whereNotNull('coupon')
        ->groupBy('coupon')
        ->orderByDesc('orders')
        ->get();

        $countries = DB::table('orders')
        ->selectRaw(
            "SUM(CASE WHEN currency_symbol = 'Rs' THEN total ELSE 0 END) AS pkr, ".
            "SUM(CASE WHEN currency_symbol = 'A$' THEN total ELSE 0 END) AS aud, ".
            "SUM(CASE WHEN currency_symbol = 'US$' THEN total ELSE 0 END) AS usd, ".
            "SUM(CASE WHEN currency_symbol = '€' THEN total ELSE 0 END) AS eur, ".
            "SUM(CASE WHEN currency_symbol = '£' THEN total ELSE 0 END) AS gbp,
            COUNT(DISTINCT id) as orders,
            shipping_country_region"
            )
        ->where('created_at', '>=', $from)->where('created_at', '<=', $to)
        ->groupBy('shipping_country_region')
        ->where('status', '=', 'Completed')
        ->orderByDesc('orders')
        ->get();

        $customers = DB::table('orders')
        ->selectRaw(
            "SUM(CASE WHEN currency_symbol = 'Rs' THEN total ELSE 0 END) AS pkr, ".
            "SUM(CASE WHEN currency_symbol = 'A$' THEN total ELSE 0 END) AS aud, ".
            "SUM(CASE WHEN currency_symbol = 'US$' THEN total ELSE 0 END) AS usd, ".
            "SUM(CASE WHEN currency_symbol = '€' THEN total ELSE 0 END) AS eur, ".
            "SUM(CASE WHEN currency_symbol = '£' THEN total ELSE 0 END) AS gbp, ".
            "(CASE WHEN customer_id IS NULL THEN 'Guest' ELSE 'Customer' END) AS Type,
            COUNT(DISTINCT id) as orders,
            customer_email, billing_first_name"
            )
        ->where('created_at', '>=', $from)->where('created_at', '<=', $to)
        ->groupBy('customer_email')
        ->orderByDesc('orders')
        ->get();

        // $customers = DB::query()
        //     ->select(['cust_orders.*', 'p.order_id', DB::raw('SUM(p.qty) as qty')])
        //     ->fromSub($cust_orders, 'cust_orders')
        //     ->join('order_items as p', 'cust_orders.id', '=', 'p.order_id')
        //     ->get();


            return response()->json([
                'prod_sales' => $prod_sales,
                'coupons' => $coupons,
                'countries' => $countries,
                'customers' => $customers
            ], 200);

    }

}
