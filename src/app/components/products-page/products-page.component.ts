import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  public categoryId!: string;
  public gender!: string;
  public categoryTitle!: string;
  public products$!: Observable<Array<Product>>;
  public brands$!: Observable<Array<string>>;
  public filteredBrands!: Array<string>;
  public filteredSizes!: Array<string>;
  private currScrollPos = 0;
  public options: Options = {
    floor: 0,
    ceil: 100
  };
  public minPrice!: number;
  public maxPrice!: number;
  public isSlider = false;

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.gender = this.route.snapshot.paramMap.get('gender') ?? '';
    this.categoryTitle = this.route.snapshot.paramMap.get('category') ?? '';
    this.categoryId = this.route.snapshot.paramMap.get('categoryId') ?? '';
    this.products$ = this.productsService.getProducts(this.categoryId, null);
    this.brands$ = this.getBrands(this.products$);
    this.getPricesRange(this.products$).subscribe(range => {
      this.minPrice = this.options.floor = range[0];
      this.maxPrice = this.options.ceil = range[1];
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

    const searchContainer = document.getElementById('search-container')!;
    searchContainer.style.zIndex = pos < this.currScrollPos ? '1000' : '0';
    searchContainer.style.position = pos < this.currScrollPos ? 'sticky' : 'inherit';
    
    this.currScrollPos = pos;
  }

  public productClicked(product: Product) {
    this.router.navigate([`/product/${product._id}`]);
  }

  public filter() {
    const filterObj: any = {};

    if (this.filteredBrands?.length) 
      filterObj.brands = this.filteredBrands;

    if (this.filteredSizes?.length) 
      filterObj.sizes = this.filteredSizes;

    if (this.isSlider) {
      filterObj.minPrice = this.minPrice;
      filterObj.maxPrice = this.maxPrice;
    }

    this.products$ = this.productsService.getProducts(this.categoryId, filterObj);
    
    if (!this.filteredBrands?.length) {
      this.brands$ = this.getBrands(this.products$);
    }
  }

  public resetSlider() {
    this.isSlider = false;
    this.minPrice = this.options.floor || 0;
    this.maxPrice = this.options.ceil || 0;
    this.filter();
  }

  private getBrands(products$: Observable<Array<Product>>): Observable<Array<string>> {
    return products$.pipe(
      map((products: Array<Product>) => [...new Set(products.map((product: Product) => product.brand))])
    );
  }

  private getPricesRange(products$: Observable<Array<Product>>) {
    return products$.pipe(
      map((products: Array<Product>) => products.map((product: Product) => product.price)),
      map((prices: Array<number>) => 
      [Math.min.apply(Math, prices), Math.max.apply(Math, prices)])
    )
  }
}
