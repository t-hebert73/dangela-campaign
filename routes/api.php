<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post('form-submissions/survey', 'Api\FormSubmissionController@submitSurvey');

Route::middleware(['client_credentials'])->group(function () {

    Route::get('survey-submissions', 'Api\SurveySubmissionsController@index');
    Route::get('survey-submissions/latest', 'Api\SurveySubmissionsController@getLatestSurveySubmissions');
    Route::get('survey-submissions/{id}', 'Api\SurveySubmissionsController@retrieve');

});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
