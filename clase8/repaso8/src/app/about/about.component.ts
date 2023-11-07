import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit, OnDestroy {

  numeros: string[] = []

  numbersSubscription: Subscription | null = null

  interval$ = interval(1000)


  test: string[] = ['a', 'b', 'c', 'd', 'f']

  characters$ = of(...this.test).pipe(
    tap(console.log)
  )


  //SEGUIR EN EL MINUTO 8

  ngOnInit(): void {
    this.numbersSubscription = this.interval$.pipe(
      map(n => `Numero: ${n + 1}`),
      take(10)
    ).subscribe(o => this.numeros.push(o))


  }

  ngOnDestroy(): void {
    this.numbersSubscription?.unsubscribe()
    this.numbersSubscription = null
  }

}

//Primero se crea el tipo de rxjs, de acuerdo a la lista que hay en la pagina,
//se debe colocar la variable con un signo '$' al final.
//Despues se pone el .pipe para transformar o rederigir ese flujo, lo paso por un map
//para proyectarlos y transformarlos a un string. En donde, n es cada elemento. Con el 
//take lo que dice es tomar los primeros 10 y por ultimo suscribo ese dato a un array o un objeto
//Ya como un extra es crear el OnDestroy