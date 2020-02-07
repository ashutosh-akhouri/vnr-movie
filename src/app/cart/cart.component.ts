import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService) { }
  cartItems;
  ngOnInit() {
    this.cartItems=this.cart.cartItems;
  }
  remove(indx)
  {
    this.cart.cartItems.splice(indx,1);
  }
  checkOut()
  {
    alert("Checkout Successful");
  }

}
