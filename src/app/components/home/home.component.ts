import { FoodService } from './../../services/food.service';
import { FoodDetails } from './../../interfaces/food-details';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private _FoodService:FoodService,private _ActivatedRoute:ActivatedRoute){}

  searchItem:string='';
  foods:FoodDetails[]=[];
  tagName:string='';
  isEmpty!:boolean;

  ngOnInit(): void {

    this.getAllFoods();
    this.searchFood();
    this.searchByTag();
  }

  getAllFoods():void
  {
    this.foods=this._FoodService.foodDetails;
    this.checkEmpty();
  }

  searchFood():void
  {
    this._FoodService.searchItem.subscribe({
      next:()=>
      {
        this.searchItem=this._FoodService.searchItem.getValue();
        this.foods=this._FoodService.foodDetails.filter((f)=>f.name.toLocaleLowerCase().includes(this.searchItem.toLocaleLowerCase()))
        this.checkEmpty();
      }
    })
  }

  searchByTag():void
  {
    this._FoodService.foodTag.subscribe({
      next:()=>
      {
        this.tagName=this._FoodService.foodTag.getValue();
        if(this.tagName=='' || this.tagName=='All')
        {
          this.foods=this._FoodService.foodDetails;
        }
        else
        {
          this.foods=this._FoodService.foodDetails.filter((f)=>f.tags.includes(this.tagName));
        }
        this.checkEmpty();
      }
    })
  }

  checkEmpty():void
  {
    if(this.foods.length==0)
    {
      this.isEmpty=true;
      console.log('is empty : ',this.isEmpty);
    }
    else
    {
      this.isEmpty=false;
      console.log('is empty : ',this.isEmpty);
    } 
  }
}
