import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemSource = new BehaviorSubject<any[]>([])
  currentItems = this.itemSource.asObservable() 
  cartItems: any[] = []

  constructor() { }
  
  addItem(newCartItem: any ){

    const prevcartItem=this.cartItems.find((el:any)=> el.product._id == newCartItem.product._id) 
    if(prevcartItem){
      this.cartItems=this.cartItems.map((item:any)=>{
if (item.product._id == prevcartItem.product._id)
        {
          item.qty = item.qty + 1 
         
        }
         return item
      })
    }
    else{
          this.cartItems.push(newCartItem)

    }
    this.itemSource.next(this.cartItems)
  }
  updateItems(items:[]){
  this.cartItems = items
      this.itemSource.next(this.cartItems)


}
}
