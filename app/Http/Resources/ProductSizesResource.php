<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductSizesResource extends JsonResource
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
            'product_id' => $this->product_id,
            'attribute_sets_id' => $this->attribute_sets_id,
            'attributes_id' => $this->attributes_id,
            'xs' => $this->xs,
            's' => $this->s,
            'm' => $this->m,
            'l' => $this->l,
            'xl' => $this->xl,
        ];
    }
}
