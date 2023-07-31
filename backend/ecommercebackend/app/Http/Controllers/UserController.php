<?php

namespace App\Http\Controllers;
use App\Models\Users;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function getAllUsers ($id = null){
        if($id){
            $users = Users::where("user_id",$id)->get();
        }else {
            $users = Users::all();
        }

        $response = json_encode(array('status' => true, 'users' =>  $users));
        echo $response;
    }

}
