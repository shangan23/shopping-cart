import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { SignalingService } from 'src/app/services/signaling.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  product: Product;
  cartArray;

  constructor(private signal: SignalingService) {
    this.cartArray = [];
    this.signal.getGlobalCart()
      .subscribe(data => {
        let hasId = false;
        if (this.cartArray.length > 0) {
          this.cartArray.map(item => {
            if (item.id === data['id']) {
              ++item.quantity;
              hasId = true
            }
            return;
          })
          if (!hasId) {
            this.cartArray.push(data)
          }
        }
        else
          this.cartArray.push(data)
      })
  }

  getItemFromCart() {
    return this.cartArray
  }

}