import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public get(gender: string, categoryTitle: string): Observable<Array<Product>> {
    return this.http.get('http://localhost:8080/products').pipe(
        map((data: any) => data.products.filter((product: Product) => product.category.gender === gender && 
                                                                      product.category.title === categoryTitle))
    );
  }
}
