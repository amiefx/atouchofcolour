<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductIndexResource extends JsonResource
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
            'slug' => $this->slug,
           // 'is_active' => $this->is_active == 1 ? 'Active' : 'Inactive',
            'new' => $this->new,
            'offer' => $this->offer,
            'formatted_offer' => $this->formattedOffer,
            'is_active' => $this->is_active,
            'image1' => asset('storage/' . $this->image1),
            'image2' => $this->image2 ? asset('storage/' . $this->image2) : null,
            'formatted_price' => $this->formattedPrice,
            'price' => (float)$this->price2 / 100,
            'stitched_price' => (float)$this->stitchedPrice / 100,
            'symbol' => $this->symbol,
            'category' => $this->category->name,
            'in_stock' => $this->in_stock,
            'created_at' => $this->created_at->diffForHumans(),
            'total_reviews' => $this->ratings->where('approved', true)->count() ,
            'rating' => round($this->ratings->where('approved', true)->average('rating'), 1) ,
        ];

        // if ($this->is_active == 1) {
        //     $data['is_active'] = 'Active';
        // } else {
        //     $data['is_active'] = 'InActive';
        // }

        return $data;
    }
}
