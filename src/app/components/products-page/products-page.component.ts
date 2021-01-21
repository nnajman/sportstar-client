import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public category!: Category;
  public products$!: Observable<Array<Product>>;
  private currScrollPos = 0;
  public options: Options = {
    floor: 0,
    ceil: 100
  };
  public value: number = 40;
  public highValue: number = 60;
  public isSlider = false;

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      console.log(data);
    });
    this.route.params.subscribe(data => {
      this.category = JSON.parse(data.category);
      this.products$ = this.productsService.get(this.category);
    });
  };

  @HostListener('window:scroll', ['$event']) // for window scroll events

  /**
   * Handles scroll event
   */
  public onScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    const toolbar = window.document.getElementById('toolbar')!;
    toolbar.style.zIndex = pos < this.currScrollPos ? '1000' : '0';
    toolbar.style.position = pos < this.currScrollPos ? 'sticky' : 'inherit';
    
    this.currScrollPos = pos;
  }

  public productClicked(product: Product) {
    this.router.navigate([`${this.category.gender}/${this.category.title}/${product.name}`, { product: JSON.stringify(product) }]);
  }
}
