import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public get(gender: string): Observable<Array<Category>> {
    return this.http.get('http://localhost:8080/categories').pipe(
        map((data: any) => data.categories.filter((category: any) => category.gender === gender))
    );
  }
}
