<?php

namespace App\Domains\Authentication\Controllers;

use App\Domains\Authentication\Services\UserRegistrationService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Client\Request;

class UserRegistrationController extends Controller
{
    public function __construct(
        protected UserRegistrationService $service
    ) {}

    public function store(Request $request)
    {
        $response = $this->service->store($request);
        return response()->json($response);
    }
}
