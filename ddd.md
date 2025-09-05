app/
└── Domains/
    └── User/
        ├── Controllers/
        │   └── UserController.php
        ├── Models/
        │   └── User.php
        ├── Services/
        │   └── UserService.php
        ├── Repositories/
        │   ├── UserRepositoryInterface.php
        │   └── EloquentUserRepository.php
        ├── Requests/
        │   └── StoreUserRequest.php
        ├── DTOs/
        │   └── UserData.php
        └── Actions/
            └── CreateUserAction.php


app/
├── Domains/
│   ├── Customer/
│   │   ├── Actions/
│   │   │   └── CreateCustomerAction.php
│   │   │
│   │   ├── Models/
│   │   │   └── Customer.php
│   │   │
│   │   ├── Services/
│   │   │   └── CustomerService.php
│   │   │
│   │   ├── Repositories/
│   │   │   ├── Contracts/
│   │   │   │   └── CustomerRepositoryInterface.
│
│   │   │   └── Eloquent/
│   │   │       └── EloquentCustomerRepository.│
│   │   │
│   │   └── ValueObjects/
│
│   ├── User/
│   │   ├── Actions/
│   │   │   └── CreateUserAction.php
│   │   │
│   │   ├── Models/
│   │   │   └── User.php
│   │   │
│   │   ├── Services/
│   │   │   └── UserService.php
│   │   │
│   │   ├── Repositories/
│   │   │   ├── Contracts/
│   │   │   │   └── UserRepositoryInterface.php
│   │   │   └── Eloquent/
│   │   │       └── EloquentUserRepository.php
│   │   │
│   │   └── ValueObjects/
│
├── Interfaces/
│   └── Http/
│       ├── Controllers/
│       │   ├── Customer/
│       │   │   └── CustomerController.php
│       │   └── User/
│       │       └── UserController.php
│       │
│       ├── Requests/
│       │   ├── Customer/
│       │   └── User/
│       │
│       ├── Resources/
│       │   ├── Customer/
│       │   └── User/
│       │
│       └── Routes/
│           ├── customer.php
│           └── user.php
│
├── Application/
│   ├── Customer/
│   │   ├── Commands/
│   │   ├── Handlers/
│   │   └── Jobs/
│   │
│   └── User/
│       ├── Commands/
│       ├── Handlers/
│       └── Jobs/
│
├── Infrastructure/
│   ├── Persistence/
│   │   ├── Migrations/
│   │   └── Seeders/
│   │
│   └── ThirdParty/
│       ├── ExternalAPIs/
│       └── Integrations/
│
├── Providers/
│   └── RepositoryServiceProvider.php
