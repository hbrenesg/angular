import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue, list } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public database: Database, private http: HttpClient) {
    this.obtenerTodosUsuarios()
  }
  usuario: Usuario = { id: 0, nombreUsuario: '', email: '', contrasena: '', telefono: 0 }
  data: any
  listaUsuario: Usuario[] = []
  bandera: boolean = false

  //private baseUrl: string = 'https://tresjsmarket-bd-default-rtdb.firebaseio.com'

  insertarUsuarioBD(usuario: Usuario) {
    set(ref(this.database, 'usuarios/' + usuario.id), {
      id: usuario.id,
      nombreUsuario: usuario.nombreUsuario,
      email: usuario.email,
      contrasena: usuario.contrasena,
      telefono: usuario.telefono
    });

    alert('Usuario creado correctamente')
  }

  leerUsuariosBD(usuario: Usuario) {
    const starCountRef = ref(this.database, 'usuarios/' + usuario.id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      alert(data.id + data.nombreUsuario + data.email + data.contrasena + data.telefono)
    });
  }

  actualizarUsuarioBD(usuarioActualizar: Usuario) {
    update(ref(this.database, 'usuarios/' + usuarioActualizar.id), {
      //nombreUsuario: this.usuarioFormulario.value.nombreUsuario,
      email: usuarioActualizar.email,
      contrasena: usuarioActualizar.contrasena,
      telefono: usuarioActualizar.telefono
    });

    alert('Usuario actualizado correctamente')
  }

  obtenerTodosUsuarios() {
    const starCountRef = ref(this.database, 'usuarios/');
    onValue(starCountRef, (snapshot) => {
      this.data = snapshot.val();
    });
  }

  validarNombreUsuario(nombreUsuario: string): any {
    this.obtenerTodosUsuarios()
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].nombreUsuario == nombreUsuario) {
        return true
      } else {
        return false
      }
    }
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


  // getAll(): Observable<Usuario[]> {
  //   const url: string = `${this.baseUrl}/usuarios.json`

  //   return this.http.get<Usuario[]>(url)
  // }

}


