import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(categoryId: string) {
    return this.http.get<Array<Product>>('http://localhost:8080/products', {
      params: {
        categoryId
      }
    }).pipe(
      map((data: any) => data.products)
    );
  }

  public getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:8080/products/${id}`).pipe(
      map((data: any) => data.product)
    );
  }
}
