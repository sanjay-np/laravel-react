<?php

namespace App\Domains\Authentication\Services;

use App\Domains\Authentication\Data\LoginRequestData;
use App\Domains\Authentication\Data\LoginResponseData;
use App\Domains\Authentication\Data\UserData;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionService
{
    public function store(LoginRequestData $request): LoginResponseData
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        /**
         * @var User $user
         *
         * */
        $user = Auth::user();
        $token = $user->createToken('api-token')->plainTextToken;
        return new LoginResponseData(
            token: $token,
            user: UserData::from($user),
        );
    }

    public function destroy()
    {
        /**
         * @var User $user
         *
         * */
        $user = Auth::user();
        if ($user) {
            /**
             * Revoke current token
             *
             * */
            $user->currentAccessToken()->delete();

            /**
             * Revoke All tokens
             *
             * */
            // $user->tokens()->delete();
        }
    }
}
