import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {
  constructor(private readonly formBuilder: FormBuilder, private usuarioService: UsuariosService) { }

  usuarioFormulario!: FormGroup
  usuario: Usuario = {
    id: 0, nombreUsuario: '', email: '', contrasena: '', telefono: 0, administrador: false, estaLogueado: false
  }
  usuarioExiste: boolean = false

  ngOnInit(): void {
    this.usuarioFormulario = this.initForm()
    //this.onPatchValue()
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      nombreUsuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contrasena: ['', [Validators.required, this.strongPassword()]],
      telefono: ['', [Validators.pattern("^\\d{3}[-.]?\\d{4}[-.]?\\d{4}$"), Validators.required]]
    })
  }

  strongPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value

      if (!value) {
        return null
      }

      const hasUpperCase = /[A-Z]+/.test(value)
      const hasLowerCase = /[a-z]+/.test(value)
      const hasNumbers = /[0-9]+/.test(value)

      const passwordIsValid = hasUpperCase && hasLowerCase && hasNumbers

      return !passwordIsValid ? { passwordStrength: true } : null
    }
  }

  onPatchValue(): void {
    // this.usuarioFormulario.patchValue({
    //   name: 'Ana Maria',
    //   accepted: true,
    //   password: '',
    //   operativeSystem: 'linux',
    //   message: 'Hola a todos'
    // })

  }

  onSubmit() {
    this.usuarioExiste = false
    this.usuarioService.obtenerTodosUsuarios()
    if (this.usuarioService.data != null) {
      for (let index = 0; index < this.usuarioService.data.length; index++) {
        const element = this.usuarioService.data[index];
        if (element.nombreUsuario == this.usuarioFormulario.value.nombreUsuario) {
          alert('Nombre de Usuario ya existente!')
          this.usuarioFormulario.setValue({
            nombreUsuario: '', email: this.usuarioFormulario.value.email, contrasena: this.usuarioFormulario.value.contrasena,
            telefono: this.usuarioFormulario.value.telefono
          })
          this.usuarioExiste = true
          break
        }
      }
    }
    if (this.usuarioExiste === false) {
      this.usuario.id = this.usuarioService.obtenerSiguienteId()
      this.usuario.nombreUsuario = this.usuarioFormulario.value.nombreUsuario
      this.usuario.email = this.usuarioFormulario.value.email
      this.usuario.contrasena = this.usuarioFormulario.value.contrasena
      this.usuario.telefono = this.usuarioFormulario.value.telefono
      this.usuario.administrador = false
      //this.usuario.logueado = false
      this.usuarioService.insertarUsuarioBD(this.usuario)

      this.usuarioFormulario.reset()
    }
  }

}
