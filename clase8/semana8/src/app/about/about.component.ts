import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  numeros: string[] = []

  numbersSubscription: Subscription | null = null

  interval$ = interval(1000)

  test: string[] = ['a', 'b', 'c', 'd', 'e']

  //Esto es un observable
  characters$ = of(...this.test).pipe(
    tap(console.log)
  )

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
