<?php

namespace App\Domains\Clients\Services;

use App\Domains\Clients\Repositories\Interfaces\ClientRepositoryInterface;

class ClientService
{
    public function __construct(
        protected ClientRepositoryInterface $repository
    ) {}

    public function fetchClientsByType(string $type)
    {
        $clients = $this->repository->fetchClientsByType($type);
        return $clients;
    }
}
