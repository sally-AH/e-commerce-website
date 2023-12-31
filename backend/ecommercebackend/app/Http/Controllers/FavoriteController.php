<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorites;
use App\Models\Users;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FavoriteController extends Controller
{
    function add_favorite(Request $request){
        if ($request->isMethod('post')) {
            $favorite = new Favorites;
            $favorite->user_id = $request->input('user_id');
            $favorite->product_id = $request->input('product_id');
            $favorite->save();
    
            return json_encode(["favorites" => $favorite]);
        }

    }
}
