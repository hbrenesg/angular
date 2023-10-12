import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    OtroComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
