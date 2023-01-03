import { Tags } from './../interfaces/tags';
import { FoodDetails } from './../interfaces/food-details';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  searchItem=new BehaviorSubject<string>('');
  foodTag=new BehaviorSubject<string>('');

  foodDetails:FoodDetails[]=[
      {id:1,price:20,name:'pasta',favorite:false,star:1,tags:['Pasta','FastFood'],imgSrc:'assets/images/food-1.jpg',cookTime:'10-20',origins:['egy','france']},
      {id:2,price:30,name:'pizza',favorite:false,star:2,tags:['Pizza','FastFood'],imgSrc:'assets/images/food-2.jpg',cookTime:'10-20',origins:['egy','france']},
      {id:3,price:20,name:'burger',favorite:false,star:1,tags:['Meal'],imgSrc:'assets/images/food-3.jpg',cookTime:'10-20',origins:['egy','france']},
      {id:4,price:20,name:'chicken',favorite:true,star:5,tags:['Chicken'],imgSrc:'assets/images/food-4.jpg',cookTime:'10-20',origins:['egy','france']},
      {id:5,price:20,name:'stripes',favorite:true,star:5,tags:['FastFood'],imgSrc:'assets/images/food-5.jpg',cookTime:'10-20',origins:['egy','france']},
      {id:6,price:20,name:'kripe',favorite:true,star:4,tags:['Launch'],imgSrc:'assets/images/food-6.jpg',cookTime:'10-20',origins:['egy','france']},
      {id:7,price:20,name:'mahshy',favorite:true,star:5,tags:['mahshy'],imgSrc:'assets/images/food-7.jpg',cookTime:'10-20',origins:['egy','france']},
      {id:8,price:20,name:'botatos',favorite:false,star:3,tags:['botatos','FastFood'],imgSrc:'assets/images/food-8.jpg',cookTime:'10-20',origins:['egy','france']}
  ];

  tags:Tags[]=[
    {name:'All',count:14},
    {name:'FastFood',count:4},
    {name:'Pizza',count:5},
    {name:'Launch',count:7},
    {name:'SlowFood',count:2},
    {name:'Hamburger',count:3},
    {name:'Fry',count:4},
    {name:'Soup',count:5},
  ];


  addSearchItem(item:string):void
  {
    this.searchItem.next(item)
  }

  addFoodTag(t:string):void
  {
    this.foodTag.next(t)
  }
}
