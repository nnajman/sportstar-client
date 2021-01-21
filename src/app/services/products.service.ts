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

  public get(category: Category) {
    return this.http.get<Array<Product>>('http://localhost:8080/products', {
      params: {
        categoryId: category._id
      }
    }).pipe(
      map((data: any) => data.products)
    );
  }
}
