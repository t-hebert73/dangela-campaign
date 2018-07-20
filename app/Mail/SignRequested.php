<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 19/07/18
 * Time: 11:16 PM
 */

namespace DAngelaCampaign\Mail;

use DAngelaCampaign\Models\SignRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SignRequested extends Mailable
{
    use Queueable, SerializesModels;

    public $signRequest;

    /**
     * Create a new message instance.
     *
     * SurveySubmitted constructor.
     * @param SignRequest $signRequest
     */
    public function __construct(SignRequest $signRequest)
    {
        $this->signRequest = $signRequest;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.sign-requested');
    }
}