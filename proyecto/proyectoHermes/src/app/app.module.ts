import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoSugerenciasComponent } from './components/contacto-sugerencias/contacto-sugerencias.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { PedidosWAComponent } from './components/pedidos-wa/pedidos-wa.component';
import { ResenaComponent } from './components/resena/resena.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioUsuariosComponent } from './components/formulario-usuarios/formulario-usuarios.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModificarAdministradoresComponent } from './components/modificar-administradores/modificar-administradores.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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
    NovedadesComponent,
    ComentariosComponent,
    FormularioUsuariosComponent,
    NoEncontradaComponent,
    InicioComponent,
    ModificarAdministradoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
