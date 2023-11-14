import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-modificar-administradores',
  templateUrl: './modificar-administradores.component.html',
  styleUrls: ['./modificar-administradores.component.css']
})
export class ModificarAdministradoresComponent implements OnInit, OnDestroy {
  usuarioAdministrador: boolean = false
  usuarios: Usuario[] = []

  constructor(private usuarioService: UsuariosService) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    if (this.usuarioService.usuario.administrador && sessionStorage.getItem('nombreUsuario') === this.usuarioService.usuario.nombreUsuario) {
      this.usuarioAdministrador = true
    }
    this.usuarioService.obtenerTodosUsuariosObservable().subscribe(informacion => this.usuarios = informacion)
  }

  cambioEstado(id: number, e: any) {
    this.usuarioService.actualizarEstadoAdministradorUsuario(id, this.usuarios[id].administrador)
  }


}
