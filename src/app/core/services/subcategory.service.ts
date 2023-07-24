import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from 'src/common/models/domain/subcategory';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private URL = 'https://static.compragamer.com/test/subcategorias.json'

  constructor(private http: HttpClient) { }

  getSubcategories(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(this.URL);
  }

  getSubcategoriaPorId(subcategoriaId: number): Observable<Subcategory | undefined> {
    return this.http.get<Subcategory[]>(this.URL).pipe(
      map((subcategorias: Subcategory[]) => subcategorias.find(subcategoria => 
        subcategoria.id === subcategoriaId))
        
    );
    
  }

  convertCategoriesToDict(){

  }

}
