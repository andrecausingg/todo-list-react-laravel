<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TodoListModel extends Model
{
    protected $table = 'todo_list_tbl';
    protected $primaryKey = 'id';
    protected $fillable = ['description'];
    use HasFactory;
}
