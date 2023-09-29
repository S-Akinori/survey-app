<?php

namespace App\Http\Requests;

use App\Models\Client;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Symfony\Component\ErrorHandler\Debug;

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
      'user_id' => 'required',
      'token' => 'required',
      'client_id' => 'required',
      'password' => 'required',
    ];
  }

  public function authenticate(): void
  {
    $user = User::where('id', $this->user_id)->where('token', $this->token)->first();
    Log::debug($user);
    if (!$user) {
      throw ValidationException::withMessages(['failed' => __('auth.failed')]);
    } else {
      $client = Client::where('user_id', $user->id)->where('client_id', $this->client_id)->first();
      Auth::guard('client')->login($client);
    }
  }
}
