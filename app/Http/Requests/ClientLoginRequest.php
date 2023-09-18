<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ClientLoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
          'client_id' => 'required',
          'password' => 'required',
        ];
    }

    public function authenticate(): void
    {
        if (!Auth::guard('client')->attempt($this->only('client_id', 'password'))) {
            throw ValidationException::withMessages(['failed' => __('auth.failed')]);
        }
    }
}
