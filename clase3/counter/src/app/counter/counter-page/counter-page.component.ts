import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  prueba = 'prueba';

  handleInput(e: any) {
    this.prueba = e.target.value
  }

  handleSubmit(e: any) {
    e.preventDefault()
    console.log(e.target[0].value)
    this.prueba = e.target['title'].value
    e.target['title'].value = ''
  }
}
