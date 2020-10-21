import { Component, OnInit, Input } from '@angular/core';
import { appCurrency } from 'src/app/config';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  @Input() cartCount;
  @Input() cartTotal;
  appCurrency;
  constructor() {
    this.appCurrency = appCurrency;
  }

  ngOnInit(): void {}
}
