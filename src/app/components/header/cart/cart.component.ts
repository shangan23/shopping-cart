import { Component, OnInit } from '@angular/core';
import { SignalingService } from 'src/app/services/signaling.service'
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart'
import { CartService } from 'src/app/services/cart.service';
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

  constructor(private signal: SignalingService,private cart: CartService) { }

  ngOnInit(): void {
    this.getCart();
    this.addToCart();
  }

  getCart() {
    this.cartCount = this.cartItem.length;
    this.cartTotal = (this.cartCount > 0) ? this.cartItem.map(function (a) { return a.price*a.quantity; }).reduce(function (a, b) { return a + b; }) : 0
  }

  addToCart() {
    this.signal.getCartItem()
      .subscribe((data) => {
        this.cartItem.push(new Cart(data['id'], data['title'], data['price'], 2))
        this.getCart();
      })
  }

}
