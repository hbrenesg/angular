import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { AfterContentChecked, AfterContentInit, AfterRenderOptions, AfterRenderRef, AfterViewChecked, AfterViewInit, Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorage, SessionStorage } from 'ngx-webstorage';
import { Observable, Subscriber, Subscription, interval, take, timer } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ChangeDetectorRef } from '@angular/core'

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
  @Input('nombreUsuario') nombreUsuario: string = ''

  listaUsuarios: Usuario[] = []
  esAdministrador: boolean = false
  estaLogueado: boolean = false

  tiempoLogueado$ = interval(60000)
  suscriptor: Subscription | null = null

  bandera: boolean = false

  model: LoginForm = {
    nombreUsuarioLogin: '',
    contrasenaLogin: ''
  }

  constructor(public usuarioService: UsuariosService, private router: Router, private change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.esAdministrador = false
    //setTimeout(this.cargaInicial, 2000, this.usuarioService, this.router, this.change)
  }

  ingresar(loginForm: any) {
    this.esAdministrador = false
    //this.usuarioService.obtenerTodosUsuarios()
    this.bandera = false
    for (let index = 0; index < this.usuarioService.data.length; index++) {
      const element = this.usuarioService.data[index];
      if (element.nombreUsuario == loginForm.value.nombreUsuarioLogin && element.contrasena == loginForm.value.contrasenaLogin) {
        alert('Ingreso exitoso')
        loginForm.reset()
        this.bandera = true
        this.usuarioService.cargarUsuario(element.nombreUsuario)
        this.usuarioService.actualizarEstadoLogueadoUsuario(this.usuarioService.usuario, true)
        this.esAdministrador = this.usuarioService.usuario.administrador
        this.nombreUsuario = this.usuarioService.usuario.nombreUsuario
        //this.estaLogueado = this.usuarioService.usuario.estaLogueado
        this.estaLogueado = true
        sessionStorage.setItem('nombreUsuario', this.usuarioService.usuario.nombreUsuario)
        this.suscriptor = this.tiempoLogueado$.pipe(
          take(1)
        ).subscribe(n => {
          this.usuarioService.actualizarEstadoLogueadoUsuario(this.usuarioService.usuario, false)
          this.esAdministrador = false
          this.nombreUsuario = ''
          this.estaLogueado = false
          sessionStorage.removeItem('nombreUsuario')
          this.router.navigate(['/inicio'])
        })
        break
      }
    }
    if (this.bandera == false) {
      alert('Ingreso incorrecto, vuelva a intentar')
      loginForm.reset()
    }
  }

  cerrarSesion(e: any) {
    e.preventDefault()
    this.usuarioService.actualizarEstadoLogueadoUsuario(this.usuarioService.usuario, false)
    this.esAdministrador = false
    this.nombreUsuario = ''
    this.estaLogueado = false
    sessionStorage.removeItem('nombreUsuario')
    this.router.navigate(['/inicio'])
  }

  // cargaInicial(usuarioService: UsuariosService, router: Router, change: ChangeDetectorRef) {
  //   this.usuarioService = usuarioService
  //   this.router = router
  //   this.change = change
  //   if (sessionStorage.getItem('nombreUsuario') !== '') {
  //     if (this.usuarioService.validarNombreUsuario(String(sessionStorage.getItem('nombreUsuario')?.toString()))) {
  //       this.usuarioService.cargarUsuario(String(sessionStorage.getItem('nombreUsuario')?.toString()))
  //       if (this.usuarioService.usuario.estaLogueado) {
  //         this.estaLogueado = true
  //         this.change.detectChanges()
  //       }
  //     }
  //   }
  // }
}
