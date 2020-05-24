<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoriesController extends Controller
{
    public function index()
    {
        return CategoryResource::collection(
            Category::ordered()->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = new Category([
            'name' => $request->name,
            'slug' => Str::slug($request->name, '-'),
            'parent_id' => $request->parent_id,
            'image' => 'images/no_image.png',
            'order' => $request->order,
            'is_active' => $request->is_active,
            'is_menu' => $request->is_menu,
            'is_home_section' => $request->is_home_section,
        ]);
        $category->save();
        return response()->json(['category'=> new CategoryResource($category)], 200);
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
        $category = Category::find($id);

        $category->name = $request->name;
        $category->slug = Str::slug($request->name, '-');
        $category->parent_id = $request->parent_id;
        $category->order = $request->order;

        $category->save();
      //  return response()->json(['role' => $role], 200);
        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id)->delete();
        return response()->json(['category' => $category], 200);
    }

    public function changeActiveStatus(Request $request)
    {
        $category = Category::find($request->category);
        $category->is_active = $request->is_active;
        $category->save();
        return new CategoryResource($category);
    }

    public function changeMenuStatus(Request $request)
    {
        $category = Category::find($request->category);
        $category->is_menu = $request->is_menu;
        $category->save();
        return new CategoryResource($category);
    }

    public function changeHsectionStatus(Request $request)
    {
        $category = Category::find($request->category);
        $category->is_home_section = $request->is_home_section;
        $category->save();
        return new CategoryResource($category);
    }

    public function changePhoto(Request $request)
    {
        $category = Category::find($request->category);
        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(20).".{$ext}", 'public');
        $category->image = $photo;
        $category->save();
        return response()->json(['category' => new CategoryResource($category)], 200);
    }
}
