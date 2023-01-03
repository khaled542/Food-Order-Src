import { FoodDetails } from './../../interfaces/food-details';
import { FoodService } from './../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _FoodService:FoodService){}

  searchItem:string='';
  allFoods:FoodDetails[]=[]; 

  ngOnInit(): void {}
  
  search(item:string):void
  {
    this._FoodService.addSearchItem(item);
  }
}
