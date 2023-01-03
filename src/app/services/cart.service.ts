import { CartItem } from './../models/CartItem';
import { FoodDetails } from './../interfaces/food-details';
import { Cart } from './../models/Cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart=new Cart();

  addToCart(food:FoodDetails):void
  {
    let cartItem=this.cart.cartItems.find((c)=>c.food.id===food.id)!;
    if(cartItem)
    {
      this.updateCount(cartItem.count+1,food.id);
      this.getCart();
      return;
    }
    this.cart.cartItems.push(new CartItem(food));
    this.getCart();
  }

  removeFromCart(foodID:number):void
  {
    this.cart.cartItems=this.cart.cartItems.filter((c)=>c.food.id!=foodID);
    this.getCart();
  }

  updateCount(count:number,foodID:number)
  {
    let cartItem=this.cart.cartItems.find((i)=>i.food.id===foodID);
    if(!cartItem) return;
    cartItem.count=count;
  }

  getCart():Cart
  {
    return this.cart;
  }
}
