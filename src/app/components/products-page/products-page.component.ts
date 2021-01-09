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
  { name: 'New Look hoodie with applique 1998 detail', price: 96.30, imageUrl: 'https://images.asos-media.com/products/new-look-hoodie-with-applique-1998-detail/21174339-1-grey?$n_750w$&wid=714&fit=constrain' },
  { name: 'Topman sweat with Los Angeles print in black', price: 104.70, imageUrl: 'https://images.asos-media.com/products/topman-sweat-with-los-angeles-print-in-black/21251321-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'Nike Jordan Jumpman large logo t-shirt in white', price: 98.14, imageUrl: 'https://images.asos-media.com/products/nike-jordan-jumpman-large-logo-t-shirt-in-white/21094085-1-white?$n_750w$&wid=714&fit=constrain' },
  { name: 'Vans jacket in black', price: 445.00, imageUrl: 'https://images.asos-media.com/products/topman-sweat-with-los-angeles-print-in-black/21251321-1-black?$n_750w$&wid=714&fit=constrain' },
  { name: 'Vans checker 66 short sleeve tshirt in red', price: 85.00, imageUrl: 'https://images.asos-media.com/products/vans-checker-66-short-sleeve-tshirt-in-red/23203593-1-cardinal?$n_750w$&wid=714&fit=constrain' },
  { name: 'Night addict stay awake logo t-shirt in white', price: 55.00, imageUrl: 'https://images.asos-media.com/products/night-addict-stay-awake-logo-t-shirt-in-white/22110028-1-white?$n_750w$&wid=714&fit=constrain' },
  { name: 'Jack & Jones crew neck pullover in burgundy', price: 150.00, imageUrl: 'https://images.asos-media.com/products/jack-jones-crew-neck-pullover-in-burgundy/22917482-1-portroyale?$n_750w$&wid=714&fit=constrain' }];

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

  public productClicked(product: any) {
    this.router.navigate(['product-details', { gender: this.gender, 
                                               category: this.category,
                                               product: JSON.stringify(product) }]);
  }
}
