import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

interface ContactFormData {
  name: string
  accept: boolean
  operativeSystem: string
  message: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // model: ContactFormData = {
  //   name: '',
  //   accept: false,
  //   operativeSystem: '',
  //   message: ''
  // }

  contactForm!: FormGroup

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm()
    this.onPatchValue()
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]+$')]],
      password: ['', [Validators.required, this.strongPassword()]],
      accepted: false,
      operativeSystem: '',
      message: ''
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

      return !passwordIsValid ? { paswordStrength: true } : null
    }
  }

  onPatchValue(): void {
    this.contactForm.patchValue({
      name: 'Ana Maria',
      accepted: true,
      password: '',
      operativeSystem: 'linux',
      message: 'Hola a todos'
    })
  }

  onSubmit() {
    console.log(this.contactForm)
  }
}
