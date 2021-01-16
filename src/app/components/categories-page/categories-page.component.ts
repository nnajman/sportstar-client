import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public gender: string = "";
  public categories$!: Observable<Array<Category>>;

  constructor(private route: ActivatedRoute,
    public categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.gender = data.gender;
      this.categories$ = this.categoriesService.get(this.gender);
    });
  }

  public categoryClicked(category: string) {
    this.router.navigate([`${this.gender}/${category}`]);
  }
}
