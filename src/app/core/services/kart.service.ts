import { Injectable } from '@angular/core';
import { Product } from 'src/common/models/domain/product';

@Injectable({
  providedIn: 'root'
})
export class KartService {

  private listaProductos:Product[] = [];

  public mostrarCarrito(){
    return this.listaProductos;
  }

  public cantidadProductos(){
    return this.listaProductos.length
  }

  public agregarProducto(product:Product){
    this.listaProductos.push(product)
    console.log('se añadio el producto '+product.id_producto)
  }

  public eliminarProducto(product:Product){
    const index = this.listaProductos.indexOf(product);
    if (index !== -1) {
      this.listaProductos.splice(index, 1);
      console.log('Se eliminó el producto ' + product.id_producto + ' del carrito.');
    } else {
      console.log('El producto ' + product.id_producto + ' no está en el carrito.');
    }
  }

constructor() { }

}
