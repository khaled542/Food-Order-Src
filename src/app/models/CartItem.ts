import { FoodDetails } from './../interfaces/food-details';
export class CartItem 
{
    constructor(f:FoodDetails)
    {
        this.food=f;
    }
    food:FoodDetails;
    count:number=1;

    get price():number
    {
        return this.food.price * this.count;
    }
   
}