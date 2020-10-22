import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared.module';
import { CartModule } from './modules/cart.module';
import { ListingModule } from './modules/listing.module';
import { DetailModule } from './modules/detail.module';
import { GuestModule } from './modules/guest.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [CartModule, ListingModule, DetailModule, GuestModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
