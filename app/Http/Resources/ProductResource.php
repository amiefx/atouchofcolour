<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends ProductIndexResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return array_merge(parent::toArray($request), [
            'price_pkr' => $this->price_pkr,
            'price_usd' => $this->price_usd,
            'price_eur' => $this->price_eur,
            'price_aud' => $this->price_aud,
            'price_gbp' => $this->price_gbp,
            'category_id' => $this->category_id,
            'description' => $this->description,
            'short_description' => $this->short_description,
            'new_from' => $this->new_from,
            'new_to' => $this->new_to,
            'special_price_percentage' => $this->special_price_percentage,
            'special_price_start' => $this->special_price_start,
            'special_price_end' => $this->special_price_end,
            'image3' => $this->image3 ? asset('storage/' . $this->image3) : null,
            'image4' => $this->image4 ? asset('storage/' . $this->image4) : null,
            'image5' => $this->image5 ? asset('storage/' . $this->image5) : null,
            'image6' => $this->image6 ? asset('storage/' . $this->image6) : null,
            'Ratings' =>  RatingResource::collection($this->ratings),
            'size_attribs' => ProductSizesResource::collection($this->product_sizes),

        ]);
    }
}
