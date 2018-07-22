<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 19/07/18
 * Time: 11:16 PM
 */

namespace DAngelaCampaign\Mail;

use DAngelaCampaign\Models\Volunteer;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class VolunteerRequested extends Mailable
{
    use Queueable, SerializesModels;

    public $volunteer;

    /**
     * VolunteerRequested constructor.
     * @param Volunteer $volunteer
     */
    public function __construct(Volunteer $volunteer)
    {
        $this->volunteer = $volunteer;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.volunteer-requested');
    }
}