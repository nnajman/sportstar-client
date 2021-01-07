import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public gender: string = "";
  public category: string = "";
  private currScrollPos = 0;
  public products = [{ name: 'adidas Originals Handball Spezial trainers in blue with gum sole', price: 315.00, imageUrl: 'https://images.asos-media.com/products/adidas-running-1-4-zip-top-in-black-and-grey/21288082-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'adidas Originals Handball Spezial trainers in blue with gum sole', price: 315.00, imageUrl: 'https://images.asos-media.com/products/adidas-running-1-4-zip-top-in-black-and-grey/21288082-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'adidas Originals Handball Spezial trainers in blue with gum sole', price: 315.00, imageUrl: 'https://images.asos-media.com/products/adidas-running-1-4-zip-top-in-black-and-grey/21288082-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'adidas Originals Handball Spezial trainers in blue with gum sole', price: 315.00, imageUrl: 'https://images.asos-media.com/products/adidas-running-1-4-zip-top-in-black-and-grey/21288082-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'adidas Originals Handball Spezial trainers in blue with gum sole', price: 315.00, imageUrl: 'https://images.asos-media.com/products/adidas-running-1-4-zip-top-in-black-and-grey/21288082-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'adidas Originals Handball Spezial trainers in blue with gum sole', price: 315.00, imageUrl: 'https://images.asos-media.com/products/adidas-running-1-4-zip-top-in-black-and-grey/21288082-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'adidas Originals Handball Spezial trainers in blue with gum sole', price: 315.00, imageUrl: 'https://images.asos-media.com/products/adidas-running-1-4-zip-top-in-black-and-grey/21288082-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'adidas Originals Handball Spezial trainers in blue with gum sole', price: 315.00, imageUrl: 'https://images.asos-media.com/products/adidas-running-1-4-zip-top-in-black-and-grey/21288082-1-black?$n_750w$&wid=714&fit=constrain' }];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.gender = params.gender;
      this.category = params.category;
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

  public productClicked(name: string) {
    this.router.navigate(['product-details', { gender: this.gender, category: this.category, name }]);
  }
}
