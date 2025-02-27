<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return response()->json(['message' => 'Laravel Backend is Working!']);
});
Route::options('{any}', function () {
    return Response::cors();
})->where('any', '.*');

Route::get('/test', function () {
    return Response::cors(['message' => 'CORS is working!']);
});
