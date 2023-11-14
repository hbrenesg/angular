import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PedidosWAComponent } from './components/pedidos-wa/pedidos-wa.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ResenaComponent } from './components/resena/resena.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ContactoSugerenciasComponent } from './components/contacto-sugerencias/contacto-sugerencias.component';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';
import { Supermercado } from './interfaces/supermercado';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioUsuariosComponent } from './components/formulario-usuarios/formulario-usuarios.component';
import { ModificarAdministradoresComponent } from './components/modificar-administradores/modificar-administradores.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'pedidosWA', component: PedidosWAComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'resena', component: ResenaComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'contacto', component: ContactoSugerenciasComponent },
  { path: 'registro', component: FormularioUsuariosComponent },
  { path: 'modificarAdmins', component: ModificarAdministradoresComponent },
  { path: '**', component: NoEncontradaComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  tresJsMarket1: Supermercado = {
    nombre: "3J's Market #1",
    horario: ['Lunes a Viernes: 6:30 a.m - 10:00 p.m', 'Sábados y Domingos: 7:00 a.m - 10:00 p.m'],
    whatsApp: 89936618,
    ubicacion: 'Costado sur del parquecito Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }
  tresJsMarket2: Supermercado = {
    nombre: "3J's Market #2",
    horario: ['Lunes a Viernes: 6:30 a.m - 9:00 p.m', 'Sábados y Domingos: 7:00 a.m - 9:00 p.m'],
    whatsApp: 86305739,
    ubicacion: '600 metros este de Repuestos El Quijote, Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }
  tresJsMarket3: Supermercado = {
    nombre: "3J's Market #3",
    horario: ['Lunes a Viernes: 6:30 a.m - 8:30 p.m', 'Sábados y Domingos: 7:00 a.m - 8:30 p.m'],
    whatsApp: 85107015,
    ubicacion: ' Los Ángeles, Bolivar, Grecia, Alajuela, Costa Rica'
  }

  horarios: string[] = [this.tresJsMarket1.horario[0], this.tresJsMarket1.horario[1],
  this.tresJsMarket2.horario[0], this.tresJsMarket2.horario[1],
  this.tresJsMarket3.horario[0], this.tresJsMarket3.horario[1]]

  nombres: string[] = [this.tresJsMarket1.nombre, this.tresJsMarket2.nombre, this.tresJsMarket3.nombre]

  numerosWA: number[] = [this.tresJsMarket1.whatsApp, this.tresJsMarket2.whatsApp, this.tresJsMarket3.whatsApp]

  nombreCliente: string = ''

  manejarNombreCliente = (nombreCliente: string) => {
    this.nombreCliente = nombreCliente
  }
}
