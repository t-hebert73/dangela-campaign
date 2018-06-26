<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 24/06/18
 * Time: 8:29 PM
 */

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\SurveySubmission;
use Illuminate\Http\Request;

class FormSubmissionController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function submitSurvey() {

        $formData = $this->validate(request(), [
            'surveyData' => 'required',
            'source' => 'required'
        ]);

        $formDataParsed = [];
        $formDataParsed['source'] = $formData['source'];
        $formDataParsed['survey_data'] = json_encode($formData['surveyData']);

        $surveySubmission = new SurveySubmission($formDataParsed);

        $surveySubmission->save();

        $response['message'] = 'Thank you for filling out the survey!';

        return response()->json($response);
    }
}