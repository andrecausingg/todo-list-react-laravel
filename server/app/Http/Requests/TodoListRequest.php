<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoListRequest extends FormRequest
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
        if ($this->method() === 'POST') {
            return [
                'description' => 'required|string|max:255',
                'img' => 'required|string|max:255',
            ];
        } else {
            return [
                'description' => 'required|string',
                'img' => 'required|string'
            ];
        }
    }

    public function messages()
    {
        if ($this->method() === 'POST') {
            return [
                'description.required' => 'Description is Required!',
                'img.required' => 'Img is Required!',
            ];
        } else {
            return [
                'description.required' => 'Description is Required!',
                'img.required' => 'Image is Required!'
            ];
        }
    }
}
