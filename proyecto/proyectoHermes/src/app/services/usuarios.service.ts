import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Database, set, ref, update, onValue, list } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public database: Database, private http: HttpClient) {
    this.obtenerTodosUsuarios()
  }

  usuario: Usuario = { id: 0, nombreUsuario: '', email: '', contrasena: '', telefono: 0, administrador: false, estaLogueado: false }
  data: Usuario[] = []

  bandera: boolean = false

  private baseUrl: string = 'https://tresjsmarket-bd-default-rtdb.firebaseio.com';

  insertarUsuarioBD(usuario: Usuario) {
    set(ref(this.database, 'usuarios/' + usuario.id), {
      id: usuario.id,
      nombreUsuario: usuario.nombreUsuario,
      email: usuario.email,
      contrasena: usuario.contrasena,
      telefono: usuario.telefono,
      administrador: usuario.administrador,
      logueado: usuario.estaLogueado
    });

    alert('Usuario creado correctamente')
  }

  // leerUsuariosBD(usuario: Usuario) {
  //   const starCountRef = ref(this.database, 'usuarios/' + usuario.id);
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     alert(data.id + data.nombreUsuario + data.email + data.contrasena + data.telefono)
  //   });
  // }

  actualizarUsuarioBD(usuarioActualizar: Usuario) {
    update(ref(this.database, 'usuarios/' + usuarioActualizar.id), {
      //nombreUsuario: this.usuarioFormulario.value.nombreUsuario,
      email: usuarioActualizar.email,
      contrasena: usuarioActualizar.contrasena,
      telefono: usuarioActualizar.telefono,
      administrador: usuarioActualizar.administrador,
      estaLogueado: usuarioActualizar.estaLogueado
    });

    alert('Usuario actualizado correctamente')
  }

  actualizarEstadoAdministradorUsuario(idUsuario: number, estadoActualizarParam: boolean) {
    update(ref(this.database, 'usuarios/' + idUsuario), {
      administrador: estadoActualizarParam
    });
  }

  actualizarEstadoLogueadoUsuario(usuario: Usuario, estadoLogueadoParam: boolean) {
    update(ref(this.database, 'usuarios/' + usuario.id), {
      estaLogueado: estadoLogueadoParam
    });
  }

  obtenerTodosUsuarios(): boolean /*: Observable<Usuario[]> */ {
    // const starCountRef = ref(this.database, 'usuarios/');
    // onValue(starCountRef, (snapshot) => {
    //   this.data = snapshot.val();
    // });
    const url: string = `${this.baseUrl}/usuarios.json`
    this.http.get<Usuario[]>(url).subscribe({
      next: informacion => this.data = informacion,
      error: e => console.error(e),
      complete: () => { return true }
    })
    return false
  }

  obtenerTodosUsuariosObservable(): Observable<Usuario[]> {
    const url: string = `${this.baseUrl}/usuarios.json`
    return this.http.get<Usuario[]>(url)
  }

  validarNombreUsuario(nombreUsuario: string): any {
    //this.obtenerTodosUsuarios()
    this.bandera = false
    if (this.data != null) {
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index].nombreUsuario == nombreUsuario) {
          this.bandera = true
          break
        }
      }
    }
    return this.bandera
  }

  obtenerSiguienteId(): any {
    this.obtenerTodosUsuarios()
    this.bandera = false
    if (this.data != null) {
      for (let index = 0; index < this.data.length; index++) {
        if (index == this.data.length - 1) {
          this.bandera = true
          if (index == 0) {
            return 1
          } else {
            return this.data.length
          }
          break
        }
      }

      if (this.bandera == false) {
        return this.data.length
      }
    } else {
      return 0
    }
  }


  cargarUsuario(nombreUsuario: string) {
    this.obtenerTodosUsuarios()
    if (this.data != null) {
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index]
        if (this.data[index].nombreUsuario == nombreUsuario) {
          this.usuario.id = this.data[index].id
          this.usuario.administrador = this.data[index].administrador
          this.usuario.nombreUsuario = this.data[index].nombreUsuario
          this.usuario.contrasena = this.data[index].contrasena
          this.usuario.telefono = this.data[index].telefono
          this.usuario.estaLogueado = this.data[index].estaLogueado
          this.usuario.email = this.data[index].email
        }
      }
    }
  }

}


