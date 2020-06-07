<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductIndexResource;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\Product_size;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      //  $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
        $per_page = $request->per_page ? $request->per_page : 5;
        //  $sortBy = $request->sort_by;
        //  $orderBy = $request->order_by;
         $sortBy = $request->sort_by ? $request->sort_by : 'id';
         $orderBy = $request->order_by ? $request->order_by : 'desc';
        $product = new ProductCollection(Product::with('product_sizes')->orderBy($sortBy, $orderBy)->paginate($per_page));
     //   $product->currency = $user_location->currency;

        return response()->json([
           // 'products' => new ProductCollection(Product::with('product_sizes')->orderBy($sortBy, $orderBy)->paginate($per_page)),
           'products' => $product,
      //     'currency' => $user_location->currency
        ], 200);
    }

    public function getHomeProducts()
    {
        $products = ProductResource::collection(Product::where(['is_active', true], ['in_stock', true])->get());

        return $products->random(6);

        // $products = DB::query()
        //     ->select([
        //         'p.id', 'p.name', 'p.image1', 'p.image2', 'p.price_pkr', 'p.price_usd', 'p.price_aud', 'p.price_eur', 'p.price_gbp',
        //         DB::raw('Count(r.id) as total_reviews'), DB::raw('format(sum(r.rating)/Count(r.id),1) as star')
        //     ])
        //     ->from('products as p')
        //     ->leftJoin('ratings as r', 'r.product_id', '=', 'p.id')
        //     ->groupBy('p.id', 'p.name', 'p.image1', 'p.image2', 'p.price_pkr', 'p.price_usd', 'p.price_aud', 'p.price_eur', 'p.price_gbp', 'is_active')
        //     ->where('is_active', true)
        //     ->get();

        // return response()->json([
        //     'products' => $products->random(5)
        // ], 200);
    }

    public function getRelatedProducts($id)
    {
        $product_category = Product::where('id', $id)->firstOrFail()->category_id;

        $products = ProductResource::collection(Product::where('is_active', true)->where('category_id', '=', $product_category)->get());

        return $products->random(4);

        // $products = DB::query()
        //     ->select([
        //         'p.id', 'p.name', 'p.image1', 'p.image2', 'p.price_pkr', 'p.price_usd', 'p.price_aud', 'p.price_eur', 'p.price_gbp', 'p.is_active',
        //         DB::raw('Count(r.id) as total_reviews'), DB::raw('round(sum(r.rating)/Count(r.id),1) as star')
        //     ])
        //     ->from('products as p')
        //     ->leftJoin('ratings as r', 'r.product_id', '=', 'p.id')
        //     ->groupBy('p.id', 'p.name', 'p.image1', 'p.image2', 'p.price_pkr', 'p.price_usd', 'p.price_aud', 'p.price_eur', 'p.price_gbp', 'p.is_active')
        //     ->where('is_active', true)
        //     ->where('category_id', '=', $product_category)
        //     ->get();
        // return response()->json([
        //     'products' => $products->random(1)
        // ], 200);
    }

    // public function categories(Request $request, $id)
    // {
    //     $user_location = geoip()->getLocation('81.169.181.179');
    //     // $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
    //     // return $user_location->toArray();
    //    // dd($user_location->currency);

    //     $sortBy = $request->sort_by;
    //     $orderBy = $request->order_by;

    //     $products = DB::query()
    //         ->select([
    //             'p.id', 'p.name', 'p.image1', 'p.image2', 'p.price_pkr', 'p.price_usd', 'p.price_aud', 'p.price_eur', 'p.price_gbp', 'p.is_active', 'p.created_at',
    //             DB::raw('Count(r.id) as total_reviews'), DB::raw('round(sum(r.rating)/Count(r.id),1) as star'),
    //             DB::raw('(CASE
    //             WHEN $user_location->currency = "EUR" THEN "User"
    //             WHEN $user_location->currency = "PKR" THEN "Admin"
    //             ELSE "SuperAdmin"
    //             END) AS status_lable')
    //         ])
    //         ->from('products as p')
    //         ->leftJoin('ratings as r', 'r.product_id', '=', 'p.id')
    //         ->groupBy('p.id', 'p.name', 'p.image1', 'p.image2', 'p.price_pkr', 'p.price_usd', 'p.price_aud', 'p.price_eur', 'p.price_gbp', 'p.is_active', 'p.created_at')
    //         ->where('is_active', true)
    //         ->where('category_id', '=', $id)
    //        // ->orderBy($sortBy, $orderBy)
    //         ->paginate(6);

    //     $category = Category::where('id', '=', $id)->get('name');

    //     return response()->json([
    //         'products' => $products,
    //         'category' => $category
    //     ], 200);
    // }

    public function categories(Request $request, $id)
    {
        $sortBy = $request->sort_by;
        $orderBy = $request->order_by;

        $products = Product::where('is_active', true)
            ->where('category_id', '=', $id)
            ->orderBy($sortBy, $orderBy)
            ->paginate(6);

        return new ProductCollection($products);

    }

    public function store(Request $request)
    {
        if ($request->image1) {
                $name_img1 = Str::random(16).'.'.explode('/', explode(':', substr($request->image1, 0, strpos($request->image1, ';')))[1])[1];
                \Image::make($request->image1)->resize(600, 800)->save(public_path('storage/images/').$name_img1);
            $request->image1 = $name_img1;
        }
        if ($request->image2) {
                $name_img2 = Str::random(16).'.'.explode('/', explode(':', substr($request->image2, 0, strpos($request->image2, ';')))[1])[1];
                \Image::make($request->image2)->resize(600, 800)->save(public_path('storage/images/').$name_img2);
            $request->image2 = $name_img2;
        }
        if ($request->image3) {
                $name_img3 = Str::random(16).'.'.explode('/', explode(':', substr($request->image3, 0, strpos($request->image3, ';')))[1])[1];
                \Image::make($request->image3)->resize(600, 800)->save(public_path('storage/images/').$name_img3);
            $request->image3 = $name_img3;
        }
        if ($request->image4) {
                $name_img4 = Str::random(16).'.'.explode('/', explode(':', substr($request->image4, 0, strpos($request->image4, ';')))[1])[1];
                \Image::make($request->image4)->resize(600, 800)->save(public_path('storage/images/').$name_img4);
            $request->image4 = $name_img4;
        }
      //  dd($request);
       // $product = Product::create($request->all() + ['image1' =>  $request->image1]);
       $product = new Product([
                'name' => $request->name,
                'slug' => Str::slug($request->name, '-'),
                'category_id' => $request->category_id,
                'short_description' =>  $request->short_description,
                'price_pkr' => $request->price_pkr,
                'price_usd' => $request->price_usd,
                'price_aud' => $request->price_aud,
                'price_eur' => $request->price_eur,
                'price_gbp' => $request->price_gbp,

                // 'description' => $request->description,
                // 'is_active' => $request->is_active,
                // 'special_price_percentage' => $request->special_price_percentage,
                // 'special_price_start' => $request->special_price_start,
                // 'special_price_end' => $request->special_price_end,
                // 'image1' => 'images/'.$name_img1,
                // 'image2' => 'images/'.$name_img2,
                // 'image3' => 'images/'.$name_img3,
                // 'image4' => 'images/'.$name_img4,
                // 'image5' => 'images/'.$name_img5,
                // 'image6' => 'images/'.$name_img6,
                // 'new_from' => $request->new_from,
                // 'new_to' => $request->new_to,

            ]);
            $product->save();

        //    $sizes = $request->size_attribs;

        //     foreach( $sizes as $size )
        //     {
        //         Product_size::create([
        //             'product_id' => $product->id,
        //             'attributes_id' => $size['attributes_id'],
        //             'xs' => $size['xs'],
        //             's' => $size['s'],
        //             'm' => $size['m'],
        //             'l' => $size['l'],
        //             'xl' => $size['xl'],
        //         ]);
        //     }

            return response()->json(['product'=> new ProductResource($product)], 200);
    }

    // /**
    //  * Store a newly created resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    // public function store(Request $request)
    // {
    //     $role = Role::where('name', $request->role)->first();
    //     $product = new User([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => bcrypt($request->password),
    //     ]);
    //     $product->role()->associate($role);
    //     $product->save();
    //     $product->profile()->save(new Profile());
    //     return response()->json(['user'=> new ProductResource($product)], 200);
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        // $per_page = $request->per_page ? $request->per_page : 5;
        // $sortBy = $request->sort_by;
        // $orderBy = $request->order_by;
        // $users = Product::where('name', 'LIKE', "%$id%")->orderBy($sortBy, $orderBy)->paginate(5);
        // return response()->json(['users'=> $users], 200);

        // $per_page = $request->per_page ? $request->per_page : 5;
        // $sortBy = $request->sort_by ? $request->sort_by : 'name';
        // $orderBy = $request->order_by ? $request->order_by : 'asc';
        // $users = Product::where('name', 'LIKE', "%$id%");
        // return response()->json([
        //     'users' => new ProductCollection($users->orderBy($sortBy, $orderBy)->paginate($per_page))
        // ], 200);

        $product = Product::where('slug', $slug)->firstOrFail();
        return response()->json(['product' => new ProductResource($product)], 200);

    }

    public function singleProduct($id)
    {

        $product = Product::where('id', $id)->firstOrFail();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $product = Product::where('slug', $slug)->first();

        $product->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name, '-'),
            'category_id' => $request->category_id,
            'short_description' =>  $request->short_description,
            'price_pkr' => $request->price_pkr,
            'price_usd' => $request->price_usd,
            'price_aud' => $request->price_aud,
            'price_eur' => $request->price_eur,
            'price_gbp' => $request->price_gbp,
            'description' => $request->description,
            'is_active' => $request->is_active,
            'special_price_percentage' => $request->special_price_percentage,
            'special_price_start' => $request->special_price_start,
            'special_price_end' => $request->special_price_end,
            'new_from' => $request->new_from,
            'new_to' => $request->new_to,
        ]);

        $sizes = $request->size_attribs;

            foreach( $sizes as $size )
            {
                if (isset($size['id'])) {
                    $product_size = Product_size::updateOrCreate(['id' => $size['id']],
                        [
                            'product_id' => $product->id,
                            'attributes_id' => $size['attributes_id'],
                            'xs' => $size['xs'],
                            's' => $size['s'],
                            'm' => $size['m'],
                            'l' => $size['l'],
                            'xl' => $size['xl'],
                        ]);
                } else {
                        Product_size::create([
                            'product_id' => $product->id,
                            'attributes_id' => $size['attributes_id'],
                            'xs' => $size['xs'],
                            's' => $size['s'],
                            'm' => $size['m'],
                            'l' => $size['l'],
                            'xl' => $size['xl'],
                        ]);
                }
            }

        return response()->json(['product' => new ProductResource($product)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id)->delete();
        return response()->json(['product' => $product], 200);
    }

    public function deleteAll(Request $request)
    {
        Product::whereIn('id', $request->users)->delete();
        return response()->json(['message', 'Records Deleted Successfully'], 200);
    }

    public function changePhoto1(Request $request)
    {
        $product = Product::find($request->product);
        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $product->image1 = $photo;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

    public function changePhoto2(Request $request)
    {
        $product = Product::find($request->product);
        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $product->image2 = $photo;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

    public function changePhoto3(Request $request)
    {
        $product = Product::find($request->product);
        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $product->image3 = $photo;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

    public function changePhoto4(Request $request)
    {
        $product = Product::find($request->product);
        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $product->image4 = $photo;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

    public function changePhoto5(Request $request)
    {
        $product = Product::find($request->product);
        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $product->image5 = $photo;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

    public function changePhoto6(Request $request)
    {
        $product = Product::find($request->product);
        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $product->image6 = $photo;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

    public function changeActiveStatus(Request $request)
    {
        $product = Product::find($request->product);
        $product->is_active = $request->is_active;
        $product->save();
        return new ProductIndexResource($product);
    }

    public function changeStockLevel(Request $request)
    {
        $product = Product::find($request->product);
        $product->in_stock = $request->in_stock;
        $product->save();
        return new ProductIndexResource($product);
    }

}
