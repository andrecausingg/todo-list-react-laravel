<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TodoListModel extends Model
{
    protected $table = 'todo_lists_tbl';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id','description','img'];
    use HasFactory;
}
