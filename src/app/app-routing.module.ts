import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/shopping/products/product-details/product-details.component'
import { ProductsComponent } from './components/shopping/products/products.component';
import { ViewCartComponent } from './components/shopping/view-cart/view-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'products',
    component:ProductsComponent
  },
  {
    path: 'cart',
    component:ViewCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
