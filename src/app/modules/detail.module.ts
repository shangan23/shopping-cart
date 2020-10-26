import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { ProductDetailsComponent } from '../components/shopping/products/product-details/product-details.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports:[ProductDetailsComponent]
})
export class DetailModule {}
