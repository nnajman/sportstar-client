import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public gender: string = "";
  public background = 'https://cdn.dynamicyield.com/api/8773836/images/2a56a134d1b57__LOBBYWomen_Slide.jpg';
  // public background = 'https://static.bershka.net/4/static/itxwebstandard/images/home/2020/1230/D_slide_woman_novedades_-1.jpg?20210104022023';
  public categories = [{name: 'TOPS', imageUrl: "https://images.asos-media.com/products/missguided-ruched-body-in-camel/21577362-1-camel?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
                       {name: 'JEANS', imageUrl: "https://images.asos-media.com/products/asos-design-high-rise-stretch-slim-straight-leg-jeans-in-brightwash/20760525-1-brightwash?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
                       {name: 'COATS & JACKETS', imageUrl: "https://images.asos-media.com/products/asos-design-borg-collared-oversized-parka-in-camel/20072839-1-camel?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
                       {name: 'SHOES', imageUrl: 'https://images.asos-media.com/products/adidas-originals-white-stan-smith-trainers/10978868-1-white?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'},
                       {name: 'KNITWEAR', imageUrl: 'https://images.asos-media.com/products/i-saw-it-first-split-sleeve-cardigan-in-blue/22642313-1-blue?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'},
                       {name: 'TROUSERS', imageUrl: 'https://images.asos-media.com/products/moon-river-belted-trousers-in-olive-green/21684722-4?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'}];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.gender = data.gender;

      if (this.gender === 'Men') {
        this.background = 'https://cdn.dynamicyield.com/api/8773836/images/337d837469d04__LOBBYMen_Slide.jpg';
        this.categories = [{name: 'JACKETS & COATS', imageUrl: "https://images.asos-media.com/products/brave-soul-padded-hooded-longline-jacket-in-black/22607484-1-black?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
        {name: 'JEANS', imageUrl: "https://images.asos-media.com/products/bolongaro-trevor-skinny-jeans-in-dark-indigo/21425673-1-blue?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
        {name: 'SHOES & SNEAKERS', imageUrl: "https://images.asos-media.com/products/adidas-originals-gazelle-vintage-trainers-in-green-suede/22158521-1-green?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
        {name: 'HOODIES & SWEATSHIRTS', imageUrl: 'https://images.asos-media.com/products/asos-actual-oversized-teddy-borg-hoodie-with-applique-logo-colour-block/21894064-1-navy?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'},
        {name: 'SHIRTS', imageUrl: 'https://images.asos-media.com/products/soul-star-zip-thru-check-flannel-shirt-with-double-pocket-in-red/20193734-1-red?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'},
        {name: 'KNITWEAR', imageUrl: 'https://images.asos-media.com/products/brave-soul-high-neck-jumper-in-bottle-green/21752014-1-bottlegreen?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'}];
      }
    });
  }

  public categoryClicked(category: string) {
    this.router.navigate(['products'], {queryParams: { gender: this.gender, category} });
  }
}
