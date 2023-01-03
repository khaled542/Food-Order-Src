import { FoodService } from './../../services/food.service';
import { CartItem } from './../../models/CartItem';
import { CartService } from './../../services/cart.service';
import { Component,OnInit} from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { FoodDetails } from 'src/app/interfaces/food-details';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit{

  constructor(private _CartService:CartService,private _FoodService:FoodService){}

  cartItems:Cart=this._CartService.getCart();
  foodID!:number;
  cartItemCount!:number;
  isEmpty!:boolean;

  ngOnInit(): void 
  {
    this.checkEmpty();
  }
  
    removeFromCart(id:number)
  {
    this._CartService.removeFromCart(id);
    this.checkEmpty();
  }

  changeCount(c:string,id:number)
  {
    let count=Number(c);
    this._CartService.updateCount(count,id);
    this._CartService.getCart();
  }

  checkEmpty():void
  {
    if(this.cartItems.cartItems.length==0)
    {
      this.isEmpty=true;
      console.log('no carts');
    }
    else
    {
      this.isEmpty=false;
      console.log('there are carts here');
    }
  }
}


