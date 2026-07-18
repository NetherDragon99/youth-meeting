<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rule;

Route::get('/', function () {
    return view('index');
})->name('home');

Route::view('/page/rank', 'pages.rank')->name('page.rank');
Route::view('/page/comunity', 'pages.comunity')->name('page.comunity');
Route::view('/page/profile', 'pages.signup')->name('page.profile');

Route::view('/login', 'pages.signin')->name('login');
Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required', 'string'],
    ]);

    if (Auth::attempt($credentials, $request->boolean('remember'))) {
        $request->session()->regenerate();

        return redirect()->intended('/')->with('goto_home', true);
    }

    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ])->onlyInput('email');
})->name('login.post');

Route::view('/register', 'pages.signup')->name('register');
Route::post('/register', function (Request $request) {
    $data = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'userGender' => ['required', 'string'],
        'phoneNo' => ['required', 'string', 'max:20'],
        'email' => ['required', 'email', 'max:255', Rule::unique('users', 'email')],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);

    $user = User::create([
        'name' => $data['name'],
        'gender' => $data['userGender'],
        'phone_number' => $data['phoneNo'],
        'email' => $data['email'],
        'password' => $data['password'],
    ]);

    Auth::login($user);

    return redirect()->route('home')->with('goto_home', true);
})->name('register.store');

Route::get('/dashboard', function () {
    return view('dashboard');
});