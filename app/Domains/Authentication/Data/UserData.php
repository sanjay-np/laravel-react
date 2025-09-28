<?php

namespace App\Domains\Authentication\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript('typeUserData')]
class UserData extends Data
{
    public function __construct(
        public string $id,
        public string $name,
        public string $email,
    ) {}
}
