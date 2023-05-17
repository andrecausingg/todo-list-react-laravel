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
        // return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')){
            return [
                'description' => 'required|string|max:255'
            ];
        }else{
            return [
                'description' => 'required|string'
            ]; 
        }
    }

    public function messages()
    {
        if(request()->isMethod('post')){
            return [
                'description.required' => 'Description is Required!'
            ];
        }else{
            return [
                'description.required' => 'Description is Required!'
            ];
        }
    }
}
