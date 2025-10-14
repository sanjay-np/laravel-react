<?php

namespace App\Domains\Clients\Repositories\Interfaces;

use App\Domains\Clients\Models\Client;

interface ClientRepositoryInterface
{
    public function fetchClientsByType(string $type): Client;
}
