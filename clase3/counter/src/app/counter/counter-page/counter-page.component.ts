import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  titulo: string = 'Título'

  counter: number = 0

  //Se crea un método para sumar
  sub() {
    this.counter -= 1
  }

  modify(qty: number) {
    this.counter += qty
  }

  //Recibimos el evento
  handleInput(e: any) {
    this.titulo = e.target.value
  }

  handleSubmit(e: any) {
    e.preventDefault()
    console.log(e.target[0].value)
    this.titulo = e.target['title'].value
    e.target['title'].value = ''
  }
}
