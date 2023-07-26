import { Injectable } from '@angular/core';
import { Product } from 'src/common/models/domain/product';

@Injectable({
  providedIn: 'root'
})
export class KartService {

  private storageKey = 'cartProducts'; // Key for the localStorage

  constructor() {
    // Load cart products from localStorage if available
    const storedProducts = localStorage.getItem(this.storageKey);
    if (storedProducts) {
      this.listaProductos = JSON.parse(storedProducts);
    }
  }

  private listaProductos: Product[] = [];

  public getKart() {
    return this.listaProductos;
  }

  public cantidadProductos() {
    return this.listaProductos.length;
  }

  public agregarProducto(product: Product) {
    this.listaProductos.push(product);
    this.guardarCarritoEnLocalStorage();
    console.log('Se añadió el producto ' + product.id_producto);
  }

  public eliminarProducto(product: Product) {
    const index = this.listaProductos.indexOf(product);
    if (index !== -1) {
      this.listaProductos.splice(index, 1);
      this.guardarCarritoEnLocalStorage();
      console.log('Se eliminó el producto ' + product.id_producto + ' del carrito.');
    } else {
      console.log('El producto ' + product.id_producto + ' no está en el carrito.');
    }
  }

  private guardarCarritoEnLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.listaProductos));
  }

}
