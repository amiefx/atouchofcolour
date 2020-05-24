<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\HomeSlideResource;
use App\Models\Category;
use App\Models\HomeSlide;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;

class HomeSlideController extends Controller
{
    public function index()
    {
        return response()->json([
            'homeslides' => HomeSlideResource::collection(HomeSlide::all()),
            'links' => Category::pluck('slug')->all()
        ], 200);
    }

    // public function store(Request $request)
    // {
    //     $homeslides = HomeSlide::create([
    //         'name' => $request->name,
    //         'large_image' => $request->large_image,
    //         'small_image' => $request->small_image,
    //         'link' => $request->link,
    //         'is_active' => $request->is_active,
    //     ]);
    //     return response()->json(['homeslide' => new HomeSlideResource($homeslides),
    //     'images' => HomeSlide::pluck('large_images')->all()],
    //     200);
    // }

    public function store(Request $request)
    {
       // if ($request->large_image) {
             $name = Str::random(16).'.'.explode('/', explode(':', substr($request->large_image, 0, strpos($request->large_image, ';')))[1])[1];
             \Image::make($request->large_image)->resize(1499, 609)->save(public_path('storage/images/').$name);
           // $request->large_image = $name;
      //  }

          $smallname = Str::random(16).'.'.explode('/', explode(':', substr($request->small_image, 0, strpos($request->small_image, ';')))[1])[1];
          \Image::make($request->small_image)->resize(600, 800)->save(public_path('storage/images/').$smallname);

        // $xploded = explode(',', request()->small_image);
        // $decoded = base64_decode($xploded[1]);
        // if (str_contains($xploded[0], 'jpeg'))
        //     $extension = 'jpg';
        // else
        //     $extension = 'png';

        // $fileName = 'storage/images/'.time().'.'.$extension;
        // $path = public_path().'/'.$fileName;
        // file_put_contents($path, $decoded);

        $homeslides = HomeSlide::create([
                'name' => $request->name,
                'large_image' =>  'images/'.$name,
                'small_image' =>  'images/'.$smallname,
                'link' => $request->link,
                'is_active' => $request->is_active,
            ]);
            return response()->json(['homeslide' => new HomeSlideResource($homeslides)], 200);
    }

    public function update(Request $request, $id)
    {
        $homeslides = HomeSlide::find($id);

        $homeslides->update([
            'name' => $request->name,
            'link' => $request->link,
            'is_active' => $request->is_active,
        ]);
        return response()->json(['homeslide' => new HomeSlideResource($homeslides)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $homeslide = HomeSlide::find($id)->delete();
        return response()->json(['homeslide' => $homeslide], 200);
    }

    public function changePhotoL(Request $request)
    {
        $homeslide = HomeSlide::find($request->homeslide);

        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $homeslide->large_image = $photo;
        $homeslide->save();

        return response()->json(['homeslide' => new HomeSlideResource($homeslide)], 200);
    }

    public function changePhotoS(Request $request)
    {
        $homeslide = HomeSlide::find($request->homeslide);

        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $homeslide->small_image = $photo;
        $homeslide->save();

        return response()->json(['homeslide' => new HomeSlideResource($homeslide)], 200);
    }
}
