<?php
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('messanger', function ($user) {
    return !is_null($user);
});

Broadcast::channel('typing-status.{receiver_id}',function(User $user,int $receiver_id){
  return $user->id == $receiver_id;
});

Broadcast::channel('get-message',function ($user){
  return !is_null($user);
});