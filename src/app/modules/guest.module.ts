import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';

import { FooterComponent } from '../components/footer/footer.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BreadcrumbComponent,
    HomeComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BreadcrumbComponent,
    HomeComponent
  ],
})
export class GuestModule {}
