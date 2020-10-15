import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SignalingService {

  cartSubject = new Subject()

  constructor() { }

  sendCartItem(product) {
    this.cartSubject.next(product)
  }

  getCartItem() {
   return this.cartSubject.asObservable()
  }

}
