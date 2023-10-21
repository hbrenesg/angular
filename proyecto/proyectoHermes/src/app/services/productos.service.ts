import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';
import { Database, ref, onValue } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // dataProductos: any
  private baseUrl: string = 'https://tresjsmarket-bd-default-rtdb.firebaseio.com'

  constructor(/*public databaseProductos: Database,*/ private http: HttpClient) { }

  obtenerTodosProductos(): Observable<Producto[]> {
    const url = `${this.baseUrl}/productos.json`
    return this.http.get<Producto[]>(url)
  }

  // obtenerTodosProductosFirebase() {
  //   const starCountRef = ref(this.databaseProductos, 'productos/');
  //   onValue(starCountRef, (snapshot) => {
  //     this.dataProductos = snapshot.val();
  //   });
  // }
}
