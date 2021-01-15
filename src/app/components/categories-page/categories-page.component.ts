import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public gender: string = "";
  public categories!: Observable<Array<any>>;
  public background = '';

  constructor(private route: ActivatedRoute,
     private http: HttpClient,
     private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.gender = data.gender;

      if (this.gender === 'Men') {
        this.background = 'https://cdn.dynamicyield.com/api/8773836/images/337d837469d04__LOBBYMen_Slide.jpg';
      } else {
        this.background = 'https://cdn.dynamicyield.com/api/8773836/images/2a56a134d1b57__LOBBYWomen_Slide.jpg';
      }

      this.categories = this.http.get('http://localhost:8080/categories').pipe(
        map((data: any) => data.categories.filter((category: any) => category.gender === this.gender)),
      );
    });
  }

  public categoryClicked(category: string) {
    this.router.navigate(['products'], {queryParams: { gender: this.gender, category} });
  }
}
