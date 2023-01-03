import { CartService } from './../../services/cart.service';
import { FoodDetails } from './../../interfaces/food-details';
import { FoodService } from './../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{

  constructor(private _ActivatedRoute:ActivatedRoute,private _FoodService:FoodService,
             private _Router:Router,private _CartService:CartService){}

  param:any=this._ActivatedRoute.params;
  foodID=Number(this.param._value.id);
  food!:FoodDetails;

  ngOnInit():void
  {
    this.getFoodDeatails();
  }

  getFoodDeatails():void
  {
    this.food=this._FoodService.foodDetails.find((f)=>f.id==this.foodID)!;
  }

  addToCart():void
  {
    this._CartService.addToCart(this.food);
    this._Router.navigate(['/cartpage']);
  }
}
