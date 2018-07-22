<?php

namespace DAngelaCampaign\Mail;

use DAngelaCampaign\Models\SurveySubmission;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SurveySubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public $surveySubmission;

    /**
     * SurveySubmitted constructor.
     * @param SurveySubmission $surveySubmission
     */
    public function __construct(SurveySubmission $surveySubmission)
    {
        $this->surveySubmission = $surveySubmission;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.survey-submitted');
    }
}
