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
Route::post('form-submissions/sign-request', 'Api\FormSubmissionController@submitSignRequest');
Route::post('form-submissions/volunteer', 'Api\FormSubmissionController@submitVolunteerRequest');
Route::post('form-submissions/donation', 'Api\FormSubmissionController@submitDonationRequest');
Route::post('tracking/site-view', 'Api\TrackingController@trackSiteView');

Route::middleware(['client_credentials'])->group(function () {

    Route::get('survey-submissions', 'Api\SurveySubmissionsController@index');
    Route::get('survey-submissions/latest', 'Api\SurveySubmissionsController@getLatestSurveySubmissions');
    Route::get('survey-submissions/{id}', 'Api\SurveySubmissionsController@retrieve');
    Route::delete('survey-submissions/{id}', 'Api\SurveySubmissionsController@destroy');

    Route::get('sign-requests', 'Api\SignRequestsController@index');
    Route::get('sign-requests/latest', 'Api\SignRequestsController@getLatestSignRequests');
    Route::get('sign-requests/{id}', 'Api\SignRequestsController@retrieve');
    Route::delete('sign-requests/{id}', 'Api\SignRequestsController@destroy');

    Route::get('volunteers', 'Api\VolunteersController@index');
    Route::get('volunteers/latest', 'Api\VolunteersController@getLatestVolunteers');
    Route::get('volunteers/{id}', 'Api\VolunteersController@retrieve');
    Route::delete('volunteers/{id}', 'Api\VolunteersController@destroy');

    Route::get('donations', 'Api\DonationsController@index');
    Route::get('donations/latest', 'Api\DonationsController@getLatestDonations');
    Route::get('donations/{id}', 'Api\DonationsController@retrieve');
    Route::delete('donations/{id}', 'Api\DonationsController@destroy');

    Route::get('dashboard/get-stats', 'Api\DashboardController@getDashboardStats');

});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
