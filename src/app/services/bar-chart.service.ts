import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Array<any>> {
    return this.http.get('http://localhost:8080/Products/perBrands').pipe(
      map((res: any) => res.productsPerBrand)
    );
  }
}
