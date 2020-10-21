import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { SignalingService } from 'src/app/services/signaling.service';
import { appCurrency } from 'src/app/config'

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})

export class ViewCartComponent implements OnInit {
  loading: boolean
  cart: Cart[]
  cartTotal: number
  appCurrency
  constructor(private cart_: CartService, private signal: SignalingService) {
    this.loading = true;
    this.appCurrency = appCurrency
    this.signal.sendProductTitle('View Cart');
  }

  ngOnInit(): void {
    this.cart = this.cart_.getItemFromCart();
    this.cartTotal = (this.cart.length > 0) ?
      this.cart.map(item => {
        return item.price * item.quantity
      })
        .reduce(
          (a, b) => { return a + b; }
        ) : 0;
    this.loading = false;
  }

}
