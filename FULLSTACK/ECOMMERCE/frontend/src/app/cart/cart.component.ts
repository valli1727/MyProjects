import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { ApiService } from '../api.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,RouterModule,ToastrModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
cartItems:any = []

cartCount=0
subTotal = 0
estTotal = 0
constructor(private router:Router, private toastr: ToastrService,
  private cartService: CartService,private apiService:ApiService ){

}
ngOnInit(): void{
  this.cartService.currentItems.subscribe((data:any)=>{
    this.cartItems=data 
  })
this.calculateCartItems()
}
deleteItem(product_id: String) {
  const prevItem: any = this.cartItems.find((item: any) => item.product._id == product_id)
  if (prevItem) {
    const filteredItems = this.cartItems.filter((item: any) => item.product._id !== product_id)
    //this.cartItems = filteredItems;
   this.cartService.updateItems(filteredItems)
  }
   this.calculateCartItems()
}
calculateCartItems(){
this.cartCount = this.cartItems.length
this.subTotal = this.cartItems.reduce((acc:any,current:any)=>{
  return acc + current.qty 
},0)

this.estTotal = this.cartItems.reduce((acc:any,current:any)=>{
  return acc + (current.product.price*current.qty) 
},0)

}
decreaseQty(product_id:String){
    const prevItem: any = this.cartItems.find((item: any) => item.product._id == product_id)
let qty=prevItem.qty
if (qty ==1){
  return 
}
qty=qty-1
if(prevItem){
      this.cartItems=this.cartItems.map((item:any)=>{
if (item.product._id == prevItem.product._id)
        {
          item.qty = qty
         
        }
         return item
      })
    }
this.cartService.updateItems(this.cartItems)
this.calculateCartItems()
}

increaseQty(product_id:String){
    const prevItem: any = this.cartItems.find((item: any) => item.product._id == product_id)
let qty=prevItem.qty
if (qty == prevItem.product.stock){
    this.toastr.error('Cannot increase qty!', 'MiniEcommerce');
  return 
}
qty=qty+1
if(prevItem){
      this.cartItems=this.cartItems.map((item:any)=>{
if (item.product._id == prevItem.product._id)
        {
          item.qty = qty
         
        }
         return item
      })
    }
this.cartService.updateItems(this.cartItems)
this.calculateCartItems()
}
orderComplete(){
  const order = this.cartItems;
  this.apiService.orderCreate(order).subscribe((data:any)=>{
    console.log('API Response:', data);
    if (data.success == true){
      const orderId = data.order._id;
      console.log('Navigating to:', ['order','success',orderId]); 
      this.router.navigate(['order','success',orderId]);
    } else {
      console.error('Order creation failed:', data);
    }
  }, error => {
    console.error('API error:', error); 
  });
}

}
