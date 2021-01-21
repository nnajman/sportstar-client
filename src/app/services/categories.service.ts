import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public get(gender: string): Observable<Array<Category>> {
    return this.http.get<Array<Category>>('http://localhost:8080/categories', {
      params: {
        gender
      }
    }).pipe(
      map((data: any) => data.categories)
    );
  }
}
