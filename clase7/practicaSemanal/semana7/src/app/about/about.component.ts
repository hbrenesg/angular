import { Component, OnDestroy, OnInit } from '@angular/core';
import { HolaService } from '../services/hola.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  holaSubscription: Subscription | null = null

  constructor(private readonly holaService: HolaService) {

  }

  ngOnInit(): void {
    this.holaSubscription = this.holaService.getGreeting().subscribe(x => console.log(x))
    console.log('Me suscribo')
  }

  ngOnDestroy(): void {
    this.holaSubscription?.unsubscribe()
    console.log('Me desuscribo')
  }
}

//Seguir en el minuto 12
