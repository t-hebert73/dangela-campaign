<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 24/06/18
 * Time: 9:43 PM
 */

namespace DAngelaCampaign\Http\Controllers\Api;

use DAngelaCampaign\Http\Controllers\Controller;
use DAngelaCampaign\Models\SurveySubmission;

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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $surveySubmissions = SurveySubmission::find($id);

        $success = $surveySubmissions->delete();

        $response['surveySubmission'] = $surveySubmissions;

        if ($success) {
            $status = 200;
        } else {
            $response['message'] = 'There was an error. Check the activity log.';
            $status = 422;
        }

        return response()->json($response, $status);
    }
}