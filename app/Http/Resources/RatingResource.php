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
            'rating' => $this->rating,
            'title' => $this->title,
            'body' => $this->body,
            'approved' => $this->approved,
            'testimonial' => $this->testimonial,
            'created_at' => $this->created_at->diffForHumans()
        ];

        if ($this->approved == 1) {
            $data['approved'] = 'Yes';
        } else {
            $data['approved'] = 'No';
        }

        if ($this->testimonial == 1) {
            $data['testimonial'] = 'Yes';
        } else {
            $data['testimonial'] = 'No';
        }

        return $data;
    }
}
