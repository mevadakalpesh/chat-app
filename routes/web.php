<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ChatController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  Route::get('/chat/{receiver_id?}', [ChatController::class, 'index'])->name('chat.index');
});

Route::post('fire-event', function(Request $request) {
  $event = 'App\Events\\'.$request->event;
  $evetData = $request->data;
  event(new $event($evetData));
})->name('fire-event');


// builder partern demo
Route::get('test', function () {
  $product = new App\Product\ConcrateProduct1();
  $product->partA();
  $product->partB();
  $product->partC();
  return $product->getProduct()->getAllParts();
});

//factory method Pattern demo
Route::get('factory-method', function () {
 // $facebook = new App\FactoryMetods\FacebookConnector('test@test.com','1234');
//  $facebook->login();
//  $facebook->createPost();
 // $facebook->logout();
  
  function clientCode(App\FactoryMetods\SocialNetwork $creator){
    $creator->post('thisnisnfaga');
  }
  
  clientCode(new App\FactoryMetods\FacebookPoster('test@test.com','1234'));
  
  
});


require __DIR__.'/auth.php';