import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';



@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
