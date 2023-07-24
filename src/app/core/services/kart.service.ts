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

  public agregarProducto(product:Product){
    this.listaProductos.push(product)
    console.log('se añadio el producto '+product.id_producto)
  }

  public eliminarProducto(product:Product){
    this.listaProductos.pop
  }

constructor() { }

}
