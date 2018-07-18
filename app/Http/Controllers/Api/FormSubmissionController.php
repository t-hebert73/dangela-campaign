<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 24/06/18
 * Time: 8:29 PM
 */

namespace DAngelaCampaign\Http\Controllers\Api;


use DAngelaCampaign\Http\Controllers\Controller;
use DAngelaCampaign\Mail\SurveySubmitted;
use DAngelaCampaign\Models\SurveySubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

        $atLeastOneQuestionAnswered = false;

        foreach($formData['surveyData'] as $surveyData) {
            if($surveyData['type'] === 'ranked') {
                foreach($surveyData['availableOptions'] as $option) {
                    if(isset($option['rank'])) {
                        $atLeastOneQuestionAnswered = true;
                    }
                }
            } else {
                if(isset($surveyData['answer'])) {
                    $atLeastOneQuestionAnswered = true;
                }
            }
        }

        if(!$atLeastOneQuestionAnswered) {

            $errors = [
                'fill' => [
                    'Please fill out at least one question.'
                ]
            ];

            $response['errors'] = $errors;

            $response['message'] = 'Survey not submitted.';
            return response()->json($response, 422);
        }


        $formDataParsed = [];
        $formDataParsed['source'] = $formData['source'];
        $formDataParsed['survey_data'] = json_encode($formData['surveyData']);

        $surveySubmission = new SurveySubmission($formDataParsed);

        $surveySubmission->save();

        Mail::to(env('SURVEY_MAIL_TO'))->send(new SurveySubmitted($surveySubmission));

        $response['message'] = "<p>Thank you for taking the time to complete the survey. Your feedback is greatly appreciated.
Sincerely, </p> <p>Henry D'Angela</p>";

        return response()->json($response);
    }
}