import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/common/models/domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = 'https://static.compragamer.com/test/productos.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  obtenerNombreImagenes(producto: Product): string[] {
    const nombresImagenes: string[] = producto.imagenes.map((imagen) => imagen.nombre);
    return nombresImagenes;
  }
}
