import { Component } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent {
  todos: Task[] = [
    { task: 'Comprar pan', completed: false },
    { task: 'Comprar leche', completed: false },
    { task: 'Comprar arroz', completed: false }
  ]

  // Se agrega = y => para convertirla en arrow function y que pueda leer el contexto 
  // de TodoComponentComponent
  addTask = (newTask: Task) => {
    this.todos.push(newTask)
  }
}
