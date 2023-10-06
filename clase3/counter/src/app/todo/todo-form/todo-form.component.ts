import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  //@Input('data2') todos: Task[] = []
  @Input('addTask') addTask: any

  //Se declara una tarea para enviar la tarea al padre e insertarla en la lista allá
  task: Task = { task: '', completed: false }

  handleSubmit(e: any) {
    //Extraer la tarea cuando el usuario da enter e insertarla en la lista de todos
    e.preventDefault()
    // this.todos.push({ task: e.target['task'].value, completed: false })
    // e.target['task'].value = ''

    this.addTask(this.task)
    //Se reinicia el objeto task para que no se comporten los nuevos como los anteriores.
    //Ya que se manejan por referencia
    this.task = { task: '', completed: false }
  }
}
