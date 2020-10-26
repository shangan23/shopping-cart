import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { ProductsComponent } from '../components/shopping/products/products.component';
import { ProductItemsComponent } from '../components/shopping/products/product-items/product-items.component';

@NgModule({
  declarations: [ProductsComponent,ProductItemsComponent],
  imports: [CommonModule, SharedModule],
  exports:[ProductsComponent,ProductItemsComponent]
})
export class ListingModule {}
