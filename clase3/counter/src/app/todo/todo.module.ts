import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoComponentComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoComponentComponent
  ]
})
export class TodoModule { }
