<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user/{id?}', [UserController::class, "getAllUsers"]);
Route::get('/product/{id?}', [ProductController::class, "getAllProducts"]);
Route::get('/pro_cat/{id?}', [ProductController::class, "getAllProductsOfCategory"]);
Route::get('/orders/{id?}', [OrderController::class, "getAllOrders"]);
Route::get('/user_orders/{id?}', [OrderController::class, "getAllOrdersOfUser"]);
Route::match(['get', 'post'], '/user_signin', [UserController::class, "signIn"]);

