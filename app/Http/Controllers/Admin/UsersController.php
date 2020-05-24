<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\Profile;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UsersController extends Controller
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
            'users' => new UserCollection(User::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
            'roles' => Role::pluck('name')->all()
        ], 200);
    }

    public function getUserLocation()
    {
        $user_location = geoip()->getLocation('81.169.181.179');
       // $user_location = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
        return $user_location->toArray();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $role = Role::where('name', $request->role)->first();
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $user->role()->associate($role);
        $user->save();
    //    $user->profile()->save(new Profile());
        return response()->json(['user'=> new UserResource($user)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        // $per_page = $request->per_page ? $request->per_page : 5;
        // $sortBy = $request->sort_by;
        // $orderBy = $request->order_by;
        // $users = User::where('name', 'LIKE', "%$id%")->orderBy($sortBy, $orderBy)->paginate(5);
        // return response()->json(['users'=> $users], 200);

        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $users = User::where('name', 'LIKE', "%$id%");
        return response()->json([
            'users' => new UserCollection($users->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
            'roles' => Role::pluck('name')->all()
        ], 200);

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
        $role = Role::where('name', $request->role)->first();
        $user = User::find($id);
        $user->name = $request->name;
        $user->role()->dissociate($user->role);
        $user->role()->associate($role);
        $user->save();
        return response()->json(['user' => new UserResource($user)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id)->delete();
        Profile::where('user_id', $id)->delete();
        return response()->json(['user' => $user], 200);
    }

    public function deleteAll(Request $request)
    {
        User::whereIn('id', $request->users)->delete();
        return response()->json(['message', 'Records Deleted Successfully'], 200);
    }

    public function verifyEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|unique:users'
        ]);
        return response()->json(['message', 'Valid Email', 200]);
    }

    public function changeRole(Request $request)
    {
        $role = Role::where('name', $request->role)->first();
        $user = User::find($request->user);
        $loggedInUser = $request->user();
        if($user->id === $loggedInUser->id) {
            return response()->json(['user' => new UserResource($loggedInUser)], 422);
        }
        $user->role()->associate($role);
        $user->save();
        return response()->json(['user' => new UserResource($user)], 200);
    }

    public function changeStatus(Request $request)
    {
        $status = $request->status;
        $user = User::find($request->user);
        $loggedInUser = $request->user();
        if($user->id === $loggedInUser->id) {
            return response()->json(['user' => new UserResource($loggedInUser)], 422);
        }
        $user->is_active = $status;
        $user->save();
        return response()->json(['user' => new UserResource($user)], 200);
    }

    public function changePhoto(Request $request)
    {
        // $user = User::find($request->user);
        // $profile = Profile::where('user_id', $request->user)->first();
        // $ext = $request->photo->extension();
        // $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        // $profile->photo = $photo;
        // $user->profile()->save($profile);
        // return response()->json(['user' => new UserResource($user)], 200);

        $user = User::find($request->user);
        $ext = $request->photo->extension();
        $photo = $request->photo->storeAs('images', Str::random(16).".{$ext}", 'public');
        $user->photo = $photo;
        $user->save();
        return response()->json(['user' => new UserResource($user)], 200);
    }

    public function myAccount()
    {
        $users = auth('api')->user();
        return response()->json(['users' => new UserResource($users)], 200);
    }

    public function updateProfile(Request $request, $id)
    {
       // $user = User::find($id);
        $user = auth()->user();
        $user->name = $request->name;
        $user->password = bcrypt($request->password);
        $user->save();
        return response()->json(['user' => new UserResource($user)], 200);
    }
}
