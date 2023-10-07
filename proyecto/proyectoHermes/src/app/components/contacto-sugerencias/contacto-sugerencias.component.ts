import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-contacto-sugerencias',
  templateUrl: './contacto-sugerencias.component.html',
  styleUrls: ['./contacto-sugerencias.component.css']
})
export class ContactoSugerenciasComponent {
  @Input('informacionNombres') nombres: string[] = []
  @Input('manejarNombreCliente') manejarNombreCliente: any
  cliente: Cliente = { nombre: '', correoElectronico: '', supermercadoAsociado: '', mensaje: '' }
  nombreCliente: string = ''

  manejarCambioEnInput(e: any) {
    this.manejarNombreCliente(e.target.value)
  }

  manejarFormulario(e: any) {
    e.preventDefault()
    this.cliente.nombre = e.target['nombreCliente'].value
    this.cliente.correoElectronico = e.target['correoElectronicoCliente'].value
    this.cliente.supermercadoAsociado = e.target['seleccionarSupermercado'].value
    this.cliente.mensaje = e.target['mensajeCliente'].value
    if (this.cliente.nombre !== '' && this.cliente.correoElectronico !== '' && this.cliente.supermercadoAsociado !== 'Seleccione un supermercado' && this.cliente.mensaje !== '') {
      console.log(this.cliente)
      this.limpiarFormulario(e)
    } else {
      alert("Por favor completar los campos")
    }

  }

  limpiarFormulario(e: any) {
    e.target['nombreCliente'].value = ''
    e.target['correoElectronicoCliente'].value = ''
    e.target['seleccionarSupermercado'].value = ''
    e.target['mensajeCliente'].value = ''
  }
}
