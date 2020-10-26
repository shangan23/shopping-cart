import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared.module';
import { CartModule } from './modules/cart.module';
import { ListingModule } from './modules/listing.module';
import { DetailModule } from './modules/detail.module';
import { GuestModule } from './modules/guest.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    SharedModule,
    CartModule,
    ListingModule,
    DetailModule,
    GuestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
