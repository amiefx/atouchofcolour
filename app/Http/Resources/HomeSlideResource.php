<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HomeSlideResource extends JsonResource
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
            'large_image' => asset('storage/' . $this->large_image),
            'small_image' => asset('storage/' . $this->small_image),
            'link' => $this->link,
            'is_active' => $this->is_active,
            'created_at' => $this->created_at->format('Y-N-D H:i:s')
        ];
    }
}
