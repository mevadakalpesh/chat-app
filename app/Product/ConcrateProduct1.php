<?php
namespace App\Product;
use App\Product\Product1;
class ConcrateProduct1 implements ProductInterface
{
  private $product;
  public function __construct(){
    $this->refresh();
  }
  
  public function refresh(){
    $this->product = new Product1();
  }
  
  public function partA(){
    $this->product->parts[] = 'this part A';
  }
  
  public function partB(){
    $this->product->parts[] = 'this part B';
  }
  
  public function partC(){
    $this->product->parts[] = 'this part C';
  }
  
  public function  getProduct(){
    $result = $this->product;
    $this->refresh();
    return $result;
    
  }
}

?>