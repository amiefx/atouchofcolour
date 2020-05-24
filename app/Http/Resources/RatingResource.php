<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RatingResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'product_id' => $this->product_id,
            'product' => $this->product->name,
            'rating' => $this->rating,
            'title' => $this->title,
            'body' => $this->body,
            'approved' => $this->approved,
            'created_at' => $this->created_at->diffForHumans()
        ];

        if ($this->approved == 1) {
            $data['approved'] = 'Approved';
        } else {
            $data['approved'] = 'Not Approved';
        }

        return $data;
    }
}
