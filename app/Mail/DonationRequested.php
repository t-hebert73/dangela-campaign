<?php

namespace DAngelaCampaign\Mail;

use DAngelaCampaign\Models\Donation;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class DonationRequested extends Mailable
{
    use Queueable, SerializesModels;

    public $donation;

    /**
     * DonationRequested constructor.
     * @param Donation $donation
     */
    public function __construct(Donation $donation)
    {
        $this->donation = $donation;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.donation-requested');
    }
}