<?php

namespace App\Http\Controllers;
use App\Models\Orders;
use App\Models\Users;
use App\Models\Order_invoices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    function getAllOrders ($id = null){
        if($id){
            $order = Orders::where("order_id",$id)->get();
        }else {
            $order = Orders::all();
        }

        $response = json_encode(array('status' => true, 'orders' =>  $order));
        echo $response;
    }
    function getAllOrdersOfUser ($id = null){
        if($id){
            $order = Order_invoices::where("user_id",$id)->get();
        }else {
            $order = Order_invoices::all();
        }

        $response = json_encode(array('status' => true, 'orders' =>  $order));
        echo $response;
    }
}
