<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user/{id?}', [UserController::class, "getAllUsers"]);
Route::get('/product/{id?}', [ProductController::class, "getAllProducts"]);
Route::get('/pro_cat/{id?}', [ProductController::class, "getAllProductsOfCategory"]);
