import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoSugerenciasComponent } from './components/contacto-sugerencias/contacto-sugerencias.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { PedidosWAComponent } from './components/pedidos-wa/pedidos-wa.component';
import { ResenaComponent } from './components/resena/resena.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactoSugerenciasComponent,
    HorariosComponent,
    PedidosWAComponent,
    ResenaComponent,
    UbicacionComponent,
    NovedadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
