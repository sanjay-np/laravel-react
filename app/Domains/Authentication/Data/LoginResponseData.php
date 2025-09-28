<?php

namespace App\Domains\Authentication\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript('typeLoginResponseData')]
class LoginResponseData extends Data
{
    public function __construct(
        public string $token,
        public UserData $user
    ) {}
}
