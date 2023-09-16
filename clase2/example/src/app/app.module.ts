import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './componets/counter/counter.component';
import { HeaderComponent } from "../header/header.component";
import { HeaderProjectComponent } from './componets/header-project/header-project.component';
import { PedidosWAComponent } from './componets/pedidos-wa/pedidos-wa.component';
import { ResenaComponent } from './componets/resena/resena.component';
import { HorariosComponent } from './componets/horarios/horarios.component';
import { UbicacionComponent } from './componets/ubicacion/ubicacion.component';
import { ContactoSugerenciasComponent } from './componets/contacto-sugerencias/contacto-sugerencias.component';
import { FooterComponent } from './componets/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeaderProjectComponent,
    PedidosWAComponent,
    ResenaComponent,
    HorariosComponent,
    UbicacionComponent,
    ContactoSugerenciasComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HeaderComponent
  ]
})
export class AppModule { }
