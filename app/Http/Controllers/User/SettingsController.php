<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Rules\CheckSamePassword;
use App\Rules\MatchOldPassword;
use Illuminate\Http\Request;
use Validator;

class SettingsController extends Controller
{
    public function updateProfile(Request $request)
    {
        $user = auth()->user();

        $this->validate($request, [
            'name' => ['required', 'string', 'min:3'],
            'profile' => ['required'],
        ]);

        $user->update([
            'name' => $request->name,
            'profile' => $request->profile,
        ]);

        return new UserResource($user);
    }

    public function updatePassword(Request $request)
    {
        //current password
        //new password
        // password confirmation
        $this->validate($request, [
            'name' => ['required'],
            'current_password' => ['required', new MatchOldPassword],
            'password' => ['required', 'confirmed', 'min:6', new CheckSamePassword]
        ]);

        $request->user()->update([
            'name' => $request->name,
            'password' => bcrypt($request->password)
        ]);

        return response()->json(['message' => 'Password updated'], 200);
    }
}
