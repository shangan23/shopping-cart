import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SignalingService } from 'src/app/services/signaling.service';
import {CartService} from 'src/app/services/cart.service'

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  @Input() product:Product;
  constructor(private signal:SignalingService, private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.signal.sendCartItem(this.product)
  }

}
