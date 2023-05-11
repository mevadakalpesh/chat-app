<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Message;
use Inertia\Inertia;
class ChatController extends Controller
{
    public function index(Request $reqsuest,$receiver_id=0){
      $user = auth()->user();
      $users = User::where('id','!=',$user->id)->get();
             
                  
      $messages = Message::where(function ($q) use ($user,$receiver_id) {
         return $q->where('sender_id',$user->id)->where('receive_id',$receiver_id);
      })->orWhere(function ($q) use ($user,$receiver_id){
        return $q->where('sender_id',$receiver_id)->where('receive_id',$user->id);
      })
      ->orderBy('created_at','asc')
      ->get();
        
      return Inertia::render('Chat/Chat',[
        'props' => [
          'users' => $users,
          'receiver_id' => $receiver_id,
          'messages' => $messages
          ]
        ]);
    }
}
