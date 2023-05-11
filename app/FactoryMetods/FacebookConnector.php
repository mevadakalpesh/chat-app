<?php
namespace App\FactoryMetods;

class FacebookConnector {

  public function __construct(
    public string $email,
    public string $password
    ) {}
  
  public function login(){
    echo "login successfully $this->email and $this->password";
  }
  
  public function logout(){
    echo 'logout successfully';
  }
  
  public function createPost($content){
    echo $content;
  }
  
}

?>