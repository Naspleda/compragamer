import { Component, OnInit } from '@angular/core';
import { KartService } from 'src/app/core/services/kart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { SubcategoryService } from 'src/app/core/services/subcategory.service';
import { Product } from 'src/common/models/domain/product';
import { Subcategory } from 'src/common/models/domain/subcategory';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public products:Product[]= [];
  public subcategories:Subcategory[] = [];
  public cartCount: number = this.kartService.cantidadProductos();
  public productosFiltrados:Product[]= [];
  buscarTexto: string = '';

  constructor(
    private router: Router,
    private productService:ProductService, 
    private subcategoryService:SubcategoryService,
    private kartService:KartService,
    ) {}

    redirectToKart() {
      this.router.navigate(['/kart']);
    }

    redirectToLogin() {
      this.router.navigate(['/login']);
    }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;     
      });
  }

  getSubcategories(){
    this.subcategoryService.getSubcategories().subscribe(data => {
      this.subcategories = data;
      });
  }

  getSubcategoryName(subcategoryId: number): string {
    const subcategory = this.subcategories.find((subcat) => subcat.id === subcategoryId);
    return subcategory ? subcategory.nombre : 'Subcategoría no encontrada';
  }

  agregarProductoAlCarrito(product:Product){
    this.kartService.agregarProducto(product);
    this.cartCount= this.kartService.cantidadProductos();
  }

  obtenerSubcategoriaDelProducto(subcategoriaId:number){
    return this.subcategoryService.getSubcategoriaPorId(subcategoriaId)
  }

  getNombre(product:Product[]){
    this.products.forEach(prod => {
      this.subcategories.forEach(element => {
        if(element.id == prod.id_subcategoria){
          prod.subcategory_nombre = element.nombre
        }
      });
    });
  }

  obtenerNombreImagenes(products: Product): string[] {
    const nombresImagenes: string[] = products.imagenes.map((imagen) => imagen.nombre);
    return nombresImagenes;
  }

  mostrarNombresImagenes() {
    this.products.forEach((product) => {
      const nombresImagenes = this.obtenerNombreImagenes(product);
    });
  }

  getImageUrl(product: Product): string {
    const baseUrl = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';
    const imageName = this.obtenerNombreImagenes(product)[0];
    const additionalUrl = '-med.jpg';

    return `${baseUrl}${imageName}${additionalUrl}`;
  }

  filtrarProductos() {
    this.productosFiltrados = this.products.filter(product => {
      return product.nombre.toLowerCase().includes(this.buscarTexto.toLowerCase());
    });
  }

  filtrarSubcategoria(id:number){
      const a = this.products.filter((product) => product.id_subcategoria === id);
      this.productosFiltrados = a
  }
  

  ngOnInit() {
    forkJoin([
      this.productService.getProducts(),
      this.subcategoryService.getSubcategories()
    ]).subscribe(([products, subcategories]) => {
      this.products = products;
      this.subcategories = subcategories;
      this.mostrarNombresImagenes();
      this.getNombre(this.products);
      this.productosFiltrados = this.products;
      console.log(this.products)
    });
  }
}
