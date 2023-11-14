import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {
  productos: Producto[] = []

  defaultImage = 'https://via.placeholder.com/1000/09f/fff.png'

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.obtenerTodosProductos().subscribe(informacion => this.productos = informacion)
  }

  prevent(e: any) {
    e.preventDefault()
  }
}
