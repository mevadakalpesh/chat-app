<?php
namespace App\FactoryMetods;
class FacebookPoster extends SocialNetwork{

  public function __construct(
    public string $email,
    public string $password
    ) {}
  
  public function getNetwork(){
    return  new FacebookConnector($this->email,$this->password);
  }
}

?>