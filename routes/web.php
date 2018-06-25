<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('register', 'Auth\RegisterController@register');

Route::get('csrfToken', 'Auth\LoginController@getCsrfToken');

Route::get('login', 'AppController@index')->name('login'); // this fixes 'route login not defined'

//todo: is there just a unlimited wildcard to fix this?
Route::get('/', 'AppController@index')->name('home');
Route::get('/{wildcard1}', 'AppController@index')->name('home');
Route::get('/{wildcard1}/{wildcard2}', 'AppController@index')->name('home');
Route::get('/{wildcard1}/{wildcard2}/{wildcard3}', 'AppController@index')->name('home');
Route::get('/{wildcard1}/{wildcard2}/{wildcard3}/{wildcard4}', 'AppController@index')->name('home');
