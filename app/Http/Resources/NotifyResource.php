<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NotifyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            'id' => $this->id,
            'mobile' => $this->mobile,
            'email' => $this->email,
            'product' => $this->product_name,
            'product_slug' => $this->product_slug,
            'repllied' => $this->reply,
            'date' => $this->created_at->diffForHumans()
        ];

        if ($this->reply == 1) {
            $data['repllied'] = 'Yes';
        } else {
            $data['repllied'] = 'No';
        }

        return $data;
    }
}
