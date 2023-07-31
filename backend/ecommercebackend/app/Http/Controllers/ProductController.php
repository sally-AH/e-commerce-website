<?php

namespace App\Http\Controllers;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function getAllProducts ($id = null){
        if($id){
            $product = Products::where("product_id",$id)->get();
        }else {
            $product = Products::all();
        }

        $response = json_encode(array('status' => true, 'products' =>  $product));
        echo $response;
    }

    function getAllProductsOfCategory ($cat_id = null){
        if($cat_id){
            $product = Products::where("category_id",$cat_id)->get();
        }else {
            $product = Products::all();
        }

        $response = json_encode(array('status' => true, 'products' =>  $product));
        echo $response;
    }
}
