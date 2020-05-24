<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShippingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'amount' => (float)number_format( $this->amount / 100, 2),
            'fees' => $this->formattedFees,
            'type' => $this->type,
            'symbol' => $this->symbol,
            'shipping_method' => $this->amount> 0 ? $this->name ."  -  ".$this->formattedFees :$this->name ."  -  ".'Free Shipping',
        ];
    }
}
