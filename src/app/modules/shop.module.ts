import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';

import { CartComponent } from '../components/header/cart/cart.component';
import { CartItemsComponent } from '../components/header/cart/cart-items/cart-items.component';
import { ProductItemsComponent } from '../components/shopping/products/product-items/product-items.component';
import { ProductDetailsComponent } from '../components/shopping/products/product-details/product-details.component';
import { ViewCartComponent } from '../components/shopping/view-cart/view-cart.component';
import { ProductsComponent } from '../components/shopping/products/products.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
    ProductItemsComponent,
    ProductDetailsComponent,
    ViewCartComponent,
    ProductsComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    CartComponent,
    CartItemsComponent,
    ProductItemsComponent,
    ProductDetailsComponent,
    ViewCartComponent,
    ProductsComponent
  ]
})
export class ShopModule {}
