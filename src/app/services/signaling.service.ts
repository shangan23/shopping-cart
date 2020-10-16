import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SignalingService {

  cartSubject = new Subject()
  gloablCartSubject = new Subject()
  breadcrumbTitle = new Subject()

  constructor() { }

  sendCartItem(product) {
    this.cartSubject.next(product)
  }

  getCartItem() {
    return this.cartSubject.asObservable()
  }

  sendProductTitle(title) {
    this.breadcrumbTitle.next(title)
  }

  getProductTitle() {
    return this.breadcrumbTitle.asObservable()
  }

  updateGlobalCart(item) {
    this.gloablCartSubject.next(item)
  }

  getGlobalCart() {
    return this.gloablCartSubject.asObservable()
  }

}
