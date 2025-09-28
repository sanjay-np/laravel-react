<?php

namespace App\Domains\Authentication\Data;

use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript('typeLoginRequestData')]
class LoginRequestData extends Data
{
    public function __construct(
        #[Required, Email]
        public string $email,

        #[Required, StringType]
        public string $password,

        public ?bool $remember = false,
    ) {}
}
