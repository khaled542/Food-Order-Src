import { CartItem } from './CartItem';

export class Cart
{
    cartItems:CartItem[]=[];

    get totalPrice():number
    {
        let tPrice=0;
        for(let i of this.cartItems)
        {
            tPrice +=i.price;
        }
        return tPrice
    }

    get totalCount():number
    {
        let tCount=0;
        for(let i of this.cartItems)
        {
            tCount +=i.count;
        }
        return tCount
    }
}

// get totalPrice():number
    // {
    //     let totalPrice=0;
    //     this.cartItems.forEach(item => {
    //         totalPrice +=item.price;
    //     });
    //     return totalPrice;
    // }