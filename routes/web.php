<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController; // след като сме създ. контролера
use App\Http\Controllers\HomeController; // след като сме създ. контролера

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::group(['middleware' => 'auth'], function () { // middleware за аутентикацията
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::delete('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::group(['middleware' => 'guest'], function () { // middleware за аутентикацията
    Route::get('/register', [AuthController::class, 'register'])->name('register'); // след като сме създ. контролера и сме добавили use App\Http\Controllers\AuthController
    Route::post('/register', [AuthController::class, 'registerPost'])->name('register');
    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'loginPost'])->name('login');
});
