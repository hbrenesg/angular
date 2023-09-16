import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>El header en la aplicación</h1>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
