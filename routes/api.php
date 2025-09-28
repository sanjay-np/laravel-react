<?php

use App\Domains\Authentication\Controllers\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthenticatedSessionController::class, 'store']);
Route::middleware('auth:sanctum')
    ->group(function () {
        Route::post('logout', [AuthenticatedSessionController::class, 'destroy']);
    });
