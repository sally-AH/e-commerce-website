<?php

namespace App\Http\Controllers;
use App\Models\Users;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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

    public function signUp(Request $request){
        $user_type_id = $request->input('user_type_id');
        $user_name = $request->input('user_name');
        $user_email = $request->input('user_email');
        $user_password = $request->input('user_password');
        
        $users = Users::where("user_email",$user_email)->get();
        $encryptedPassword = Hash::make($user_password);

        if($users->isEmpty()){
            $user = new Users();
            $user->user_type_id = $user_type_id;
            $user->user_name = $user_name;
            $user->user_email = $user_email;
            $user->user_password = $encryptedPassword;
            $user->save();
            return json_encode(array('status' => true,"user_id" => $user->id));
        }
        else{
            return json_encode(array("status" =>false, "message"=>"user already exists"));
        }
    }

    public function signIn(Request $request){
        if ($request->isMethod('post')) {
            $user_email = $request->input('user_email');
            $user_password = $request->input('user_password');

            $users = Users::where("user_email",$user_email)->get();
            // return json_encode(array("status" =>$user_password, "message" =>$user_email));
            $encryptedPassword = Hash::make($user_password);

            if($users->isEmpty()){
                return json_encode(array('status' => false,"message" => "user does not exist"));
            }
            else{

                $credentials = $request->only('user_email', 'encryptedPassword');
                if ($credentials) {
                    return json_encode(array("status" =>true, "message" =>"loged in",'user_id' =>  $users->first()->user_id));
                } 
                else{
                    return json_encode(array("status" =>false, "message" =>"Invalid useremail or password"));
                }

            }
        }

        

    }

}
