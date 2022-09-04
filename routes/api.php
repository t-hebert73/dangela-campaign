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
Route::post('tracking/site-view', 'Api\Admin\Tracking\TrackingController@trackSiteView');

Route::middleware(['client_credentials'])->group(function () {

    Route::get('survey-submissions', 'Api\Admin\SurveySubmissions\SurveySubmissionsController@index');
    Route::get('survey-submissions/latest', 'Api\Admin\SurveySubmissions\SurveySubmissionsController@getLatestSurveySubmissions');
    Route::get('survey-submissions/{id}', 'Api\Admin\SurveySubmissions\SurveySubmissionsController@retrieve');
    Route::delete('survey-submissions/{id}', 'Api\Admin\SurveySubmissions\SurveySubmissionsController@destroy');

    Route::get('sign-requests', 'Api\Admin\SignRequests\SignRequestsController@index');
    Route::get('sign-requests/latest', 'Api\Admin\SignRequests\SignRequestsController@getLatestSignRequests');
    Route::get('sign-requests/{id}', 'Api\Admin\SignRequests\SignRequestsController@retrieve');
    Route::delete('sign-requests/{id}', 'Api\Admin\SignRequests\SignRequestsController@destroy');

    Route::get('volunteers', 'Api\Admin\Volunteers\VolunteersController@index');
    Route::get('volunteers/latest', 'Api\Admin\Volunteers\VolunteersController@getLatestVolunteers');
    Route::get('volunteers/{id}', 'Api\Admin\Volunteers\VolunteersController@retrieve');
    Route::delete('volunteers/{id}', 'Api\Admin\Volunteers\VolunteersController@destroy');

    Route::get('donations', 'Api\Admin\Donations\DonationsController@index');
    Route::get('donations/latest', 'Api\Admin\Donations\DonationsController@getLatestDonations');
    Route::get('donations/{id}', 'Api\Admin\Donations\DonationsController@retrieve');
    Route::delete('donations/{id}', 'Api\Admin\Donations\DonationsController@destroy');

    Route::get('dashboard/get-stats', 'Api\Admin\Dashboard\DashboardController@getDashboardStats');

});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
