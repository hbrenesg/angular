import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input('data2') todos: Task[] = []

  task: Task = { task: '', completed: false }

  handleSubmit(e: any) {
    // e.preventDefault()
    // this.todos.push({ task: e.target['task'].value, completed: false })
    // e.target['task'].value = ''


  }
}
