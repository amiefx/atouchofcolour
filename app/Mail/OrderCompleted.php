<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OrderCompleted extends Mailable
{
    use Queueable, SerializesModels;

    public $order;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('sales@khodgi.com', 'Khodgi.com')
                    ->to($this->order->customer_email, $this->order->billing_first_name.' '.$this->order->billing_last_name,)
                    ->subject('Your order has been placed ('. $this->order->id .')')
                    ->view('emails.orders.completed');
    }
}
