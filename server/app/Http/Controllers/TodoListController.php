<?php

namespace App\Http\Controllers;

use App\Models\TodoListModel;
use App\Http\Requests\TodoListRequest;

class TodoListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = TodoListModel::all();
        return response()->json([
            'todos' => $todos
        ],200); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TodoListRequest $request)
    {
        try{
            TodoListModel::create([
                'description' => $request->description
            ]);

            return response()->json([
                'message' => "created"
            ], 200);  
        }catch(\Exception $e){
            return response()->json([
                'message' => "Something went Wrong!"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $todos = TodoListModel::find($id);
        if(!$todos){
            return response()->json([
                'message' => "Product Not Found"
            ], 404);
        }

        return response()->json([
            'description' => $todos
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TodoListRequest $request, $id)
    {
        try {
            $todos = TodoListModel::find($id);
            if (!$todos) {
                return response()->json([
                    'message' => "Product Not Found"
                ], 404);
            }
    
            $todos->description = $request->description;
            $todos->save();
    
            return response()->json([
                'message' => "updated"
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something Went Wrong!"
            ], 500);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $todos = TodoListModel::find($id);
        if (!$todos) {
            return response()->json([
                'message' => "Product Not Found"
            ], 404);
        }

        $todos->delete();

        return response()->json([
            'message' => "deleted"
        ], 200);
    }
}
