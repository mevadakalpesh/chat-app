<?php
namespace App\FactoryMetods;

abstract class SocialNetwork {

  abstract public function getNetwork();
  
  public function post($content){
    $network = $this->getNetwork();
    $network->login();
    $network->createPost($content);
    $network->logout();
    
  }
}


?>