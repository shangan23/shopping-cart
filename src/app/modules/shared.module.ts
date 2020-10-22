import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
