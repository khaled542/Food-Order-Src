import { Tags } from './../../interfaces/tags';
import { FoodService } from './../../services/food.service';
import { Component, EventEmitter, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  constructor(private _FoodService:FoodService){}

  tags:Tags[]=this._FoodService.tags;
  tagName:string='';

  ngOnInit():void{}
  
  setTagName(t:string):void
  {
    this._FoodService.addFoodTag(t);
  }
}
