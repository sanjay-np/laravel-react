<?php

namespace App\Domains\Authentication\Controllers;

use App\Domains\Authentication\Data\LoginRequestData;
use App\Domains\Authentication\Services\AuthenticatedSessionService;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class AuthenticatedSessionController extends Controller
{
    public function __construct(
        protected AuthenticatedSessionService $service
    ) {}

    public function store(LoginRequestData $request): JsonResponse
    {
        $response = $this->service->store($request);
        return response()->json($response);
    }

    public function destroy()
    {
        $this->service->destroy();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }
}
