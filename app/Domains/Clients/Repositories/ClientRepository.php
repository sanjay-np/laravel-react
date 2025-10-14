<?php

namespace App\Domains\Clients\Repositories;

use App\Domains\Clients\Models\Client;
use App\Domains\Clients\Repositories\Interfaces\ClientRepositoryInterface;

class ClientRepository implements ClientRepositoryInterface
{
    public function __construct(
        protected Client $model
    ) {}

    public function fetchClientsByType(string $type): Client
    {
        return $this->model->query()->where('type', $type)->get();
    }
}
