import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { CartComponent } from '../components/header/cart/cart.component';
import { CartItemsComponent } from '../components/header/cart/cart-items/cart-items.component';
import { ViewCartComponent } from '../components/shopping/view-cart/view-cart.component';

@NgModule({
  declarations: [CartComponent, CartItemsComponent, ViewCartComponent],
  imports: [CommonModule, SharedModule],
  exports: [CartComponent, CartItemsComponent, ViewCartComponent],
})
export class CartModule {}
