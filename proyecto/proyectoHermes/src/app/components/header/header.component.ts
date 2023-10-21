import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

interface LoginForm {
  nombreUsuarioLogin: string,
  contrasenaLogin: string
}



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('nombreCliente') nombreCliente: string = ''

  bandera: boolean = false

  model: LoginForm = {
    nombreUsuarioLogin: '',
    contrasenaLogin: ''
  }

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {

  }

  ingresar(loginForm: any) {
    this.usuarioService.obtenerTodosUsuarios()
    this.bandera = false
    for (let index = 0; index < this.usuarioService.data.length; index++) {
      const element = this.usuarioService.data[index];
      if (element.nombreUsuario == loginForm.value.nombreUsuarioLogin && element.contrasena == loginForm.value.contrasenaLogin) {
        alert('Ingreso exitoso')
        this.nombreCliente = loginForm.value.nombreUsuarioLogin
        loginForm.reset()
        this.bandera = true
        break
      }
    }
    if (this.bandera == false) {
      alert('Ingreso incorrecto, vuelva a intentar')
      loginForm.reset()
    }
  }


}
