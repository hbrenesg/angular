import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  //Importo la lista de Task
  @Input('data') todos: Task[] = []
}

