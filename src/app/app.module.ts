import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared.module';
import { CartModule } from './modules/cart.module';
import { ListingModule } from './modules/listing.module';
import { DetailModule } from './modules/detail.module';
import { GuestModule } from './modules/guest.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopModule } from './modules/shop.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ShopModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
