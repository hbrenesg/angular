import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolaService {

  constructor() { }

  getGreeting() {
    return new Observable<string>(observer => {
      observer.next("Hola Mundo");
      observer.complete();
    })
  }
}
