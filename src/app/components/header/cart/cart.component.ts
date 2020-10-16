import { Component, OnInit } from '@angular/core';
import { SignalingService } from 'src/app/services/signaling.service'
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart'
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: Product
  cartItem = []
  cartTotal: number
  cartCount: number

  constructor(private signal: SignalingService, private cart_: CartService) { }

  ngOnInit(): void {
    this.getCart();
    this.addToCart();
  }

  getCart() {
    this.cartItem = this.cart_.getItemFromCart()
    this.cartCount = this.cartItem.length;
    this.cartTotal = (this.cartCount > 0) ? this.cartItem.map(function (a) {
      console.log('a.price * a.quantity=', a.price * a.quantity)
      return a.price * a.quantity;
    }).reduce(function (a, b) {
      console.log('a + b=', a + b)
      return a + b;
    }) : 0
  }

  addToCart() {
    this.signal.getCartItem()
      .subscribe((data) => {
        this.signal.updateGlobalCart(new Cart(data['id'], data['title'], data['price'], 1))
        this.getCart();
      })
  }

}
