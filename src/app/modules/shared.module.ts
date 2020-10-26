import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SpinnerComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
