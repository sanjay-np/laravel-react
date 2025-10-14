<?php

namespace App\Domains\Clients\Controllers;

use App\Domains\Clients\Services\ClientService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function __construct(
        protected ClientService $service
    ) {}

    public function index(Request $request)
    {
        return $this->service->fetchClientsByType($request->type);
    }
}
