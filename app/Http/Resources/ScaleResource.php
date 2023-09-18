<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScaleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
      return [
        'minText' => $request->min_text,
        'maxText' => $request->max_text,
        'min' => $request->min,
        'max' => $request->max,
        'step' => $request->step,
      ];
    }
}
