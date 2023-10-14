import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-practica6',
  templateUrl: './practica6.component.html',
  styleUrls: ['./practica6.component.css']
})

export class Practica6Component implements OnInit {

  clientForm!: FormGroup

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clientForm = this.initForm()
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      codigo: '',
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.pattern("^\\d{3}[-.]?\\d{4}[-.]?\\d{4}$"), Validators.required]],
      domicilio: '',
      provincia: '',
      tipoCliente: '',
      clienteVerificado: ''
    })
  }

  // validatePhone(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const value = control.value

  //     if (!value) {
  //       return null
  //     }


  //   }
  // }

  // onPatchValue(): void {

  // }

  onSubmit() {
    console.log(this.clientForm)
  }
}


