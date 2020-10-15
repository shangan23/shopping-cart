import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs'
import { Cart } from '../models/cart';
import { SignalingService } from 'src/app/services/signaling.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: Product;
  cartItems: any;
  constructor() { }

  addItemToCart(item): Observable<Cart[]> {
    this.cartItems.push(item);
    return this.cartItems;
  }

  getItemFromCart() {
    return this.cartItems
  }

}
