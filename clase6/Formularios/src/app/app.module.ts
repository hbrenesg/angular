import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Practica6Component } from './practica6/practica6.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    Practica6Component
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
