<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'slug' => $this->slug,
            'image' => asset('storage/' . $this->image),
            'is_active' => $this->is_active,
            'is_menu' => $this->is_menu,
            'is_home_section' => $this->is_home_section,
            'parent_id' => $this->parent_id,
            'order' => $this->order,
            'children' => CategoryResource::collection($this->whenLoaded('children'))
        ];
    }
}
