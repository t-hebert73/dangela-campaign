<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 24/06/18
 * Time: 9:43 PM
 */

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SurveySubmission;

class SurveySubmissionsController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $surveySubmissions = SurveySubmission::all();

        $response['surveySubmissions'] = $surveySubmissions;

        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function retrieve($id)
    {
        $page = SurveySubmission::find($id);

        $response['surveySubmission'] = $page;

        $status = 200;

        return response()->json($response, $status);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLatestSurveySubmissions() {
        $surveySubmissions = SurveySubmission::orderBy('created_at', 'desc')->take(12)->get();

        $response['surveySubmissions'] = $surveySubmissions;

        return response()->json($response);
    }
}