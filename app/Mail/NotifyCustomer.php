<?php

namespace App\Mail;

use App\Models\NotifyMe;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyCustomer extends Mailable
{
    use Queueable, SerializesModels;

    public $notify;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($notify)
    {
        $this->notify = $notify;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('sales@khodgi.com', 'Khodgi.com')
                    ->to($this->notify->email )
                    ->subject( $this->notify->product_name .' available now.')
                    ->view('emails.orders.notify');
    }
}
