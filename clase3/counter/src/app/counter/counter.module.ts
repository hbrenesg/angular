import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    CounterPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterPageComponent
  ]
})
export class CounterModule { }
