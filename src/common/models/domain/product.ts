import { Image } from './image';

export interface Product {
    id_producto: number;
    destacado: number;
    garantia: number;
    id_subcategoria: number;
    iva: number;
    nombre: string;
    precio: number;
    stock: number;
    vendible: number;
    imagenes: Image[];
    subcategory_nombre?: string;
  }