import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/header/cart/cart.component';
import { CartItemsComponent } from './components/header/cart/cart-items/cart-items.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ProductsComponent } from './components/shopping/products/products.component';
import { ProductItemsComponent } from './components/shopping/products/product-items/product-items.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductDetailsComponent } from './components/shopping/products/product-details/product-details.component';
import { ViewCartComponent } from './components/shopping/view-cart/view-cart.component';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
