import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class UsersModule { }
