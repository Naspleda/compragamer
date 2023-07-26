import { Component, OnInit } from '@angular/core';
import { KartService } from '../../core/services/kart.service';
import { Router } from '@angular/router';
import { Product } from 'src/common/models/domain/product';
import { ProductService } from '../../core/services/product.service';
import { SubcategoryService } from '../../core/services/subcategory.service';
import { Subcategory } from 'src/common/models/domain/subcategory';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public products:Product[]= [];
  public subcategories:Subcategory[] = [];
  public cartCount:number =0;

  constructor(
    private router: Router,
    private productService:ProductService, 
    private subcategoryService:SubcategoryService,
    private kartService:KartService,
  ) {}

  redirectToHome() {
    this.router.navigate(['']);
  }

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


  agregarProductoAlCarrito(product:Product){
    this.kartService.agregarProducto(product);
    this.cartCount++;
  }

  ngOnInit() {
    forkJoin([
      this.productService.getProducts(),
      this.subcategoryService.getSubcategories()
    ]).subscribe(([products, subcategories]) => {
      this.products = products;
      this.subcategories = subcategories;
    });
  }

}
