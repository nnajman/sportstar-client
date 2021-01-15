import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public get(gender: string) {
    return this.http.get('http://localhost:8080/categories').pipe(
        map((data: any) => data.categories.filter((category: any) => category.gender === gender))
    );
  }
}
