import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './app/modules/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/components/header/header.component';
import { CartComponent } from './app/components/header/cart/cart.component';
import { CartItemsComponent } from './app/components/header/cart/cart-items/cart-items.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { ShoppingComponent } from './app/components/shopping/shopping.component';
import { ProductsComponent } from './app/components/shopping/products/products.component';
import { ProductItemsComponent } from './app/components/shopping/products/product-items/product-items.component';
import { BreadcrumbComponent } from './app/components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './app/components/spinner/spinner.component';
import { ProductDetailsComponent } from './app/components/shopping/products/product-details/product-details.component';
import { ViewCartComponent } from './app/components/shopping/view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    CartItemsComponent,
    FooterComponent,
    ShoppingComponent,
    ProductsComponent,
    ProductItemsComponent,
    BreadcrumbComponent,
    SpinnerComponent,
    ProductDetailsComponent,
    ViewCartComponent
  ],
  imports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
