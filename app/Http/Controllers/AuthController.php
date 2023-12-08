<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // след като сме създ. fun registerPost
use Illuminate\Support\Facades\Hash; // fun registerPost за Hash password
use Illuminate\Support\Facades\Auth; // fun loginPost

class AuthController extends Controller
{
    // ================== REGISTER STARTS HERE ==================  //
    public function register()
    {
        return view('register');
    }

    public function registerPost(Request $request)
    {
        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $user->save();

        return redirect('/home')->with('success', 'Registered successfully!'); // това е msg при success
    }

    // ================== LOGIN STARTS HERE ==================  //
    public function login()
    {
        return view('login');
    }
    public function loginPost(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (Auth::attempt($credentials)) {
            return redirect('/home')->with('success', 'Login successfully!'); // redirectва към home с msg
        }
        return back()->with('error', 'Login failed!');
    }
    // ================== LOGOUT STARTS HERE ==================  //
    public function logout()
    {
        Auth::logout();
        return redirect('/')->with('success', 'Logout successfully!');
    }
}
