<?php 
namespace App\Product;
class Product1
{
  public array $parts = [];
  public function __construct()
  {
    
  }
  
  public function getAllParts(){
    return $this->parts;
  }
  
}

?>