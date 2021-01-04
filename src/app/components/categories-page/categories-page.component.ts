import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public gender: string = "";
  public background = 'https://content.asos-media.com/-/media/homepages/unisex/homepages/2020/12-dec/xmas-sale/global/ww_desk_1440x664_blue.jpg';
  public categories = [{text: 'TOPS', url: "https://images.asos-media.com/products/missguided-ruched-body-in-camel/21577362-1-camel?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
                       {text: 'JEANS', url: "https://images.asos-media.com/products/asos-design-high-rise-stretch-slim-straight-leg-jeans-in-brightwash/20760525-1-brightwash?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
                       {text: 'COATS & JACKETS', url: "https://images.asos-media.com/products/asos-design-borg-collared-oversized-parka-in-camel/20072839-1-camel?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
                       {text: 'SHOES', url: 'https://images.asos-media.com/products/adidas-originals-white-stan-smith-trainers/10978868-1-white?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'},
                       {text: 'KNITWEAR', url: 'https://images.asos-media.com/products/i-saw-it-first-split-sleeve-cardigan-in-blue/22642313-1-blue?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'},
                       {text: 'TROUSERS', url: 'https://images.asos-media.com/products/moon-river-belted-trousers-in-olive-green/21684722-4?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'}];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.gender = data.gender;

      if (this.gender === 'Men') {
        this.background = 'https://content.asos-media.com/-/media/homepages/unisex/homepages/2020/12-dec/xmas-sale/global/mw_desk_1440x664_blue.jpg';
        this.categories = [{text: 'JACKETS & COATS', url: "https://images.asos-media.com/products/brave-soul-padded-hooded-longline-jacket-in-black/22607484-1-black?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
        {text: 'JEANS', url: "https://images.asos-media.com/products/bolongaro-trevor-skinny-jeans-in-dark-indigo/21425673-1-blue?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
        {text: 'SHOES & SNEAKERS', url: "https://images.asos-media.com/products/adidas-originals-gazelle-vintage-trainers-in-green-suede/22158521-1-green?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"},
        {text: 'HOODIES & SWEATSHIRTS', url: 'https://images.asos-media.com/products/asos-actual-oversized-teddy-borg-hoodie-with-applique-logo-colour-block/21894064-1-navy?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'},
        {text: 'SHIRTS', url: 'https://images.asos-media.com/products/soul-star-zip-thru-check-flannel-shirt-with-double-pocket-in-red/20193734-1-red?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'},
        {text: 'KNITWEAR', url: 'https://images.asos-media.com/products/brave-soul-high-neck-jumper-in-bottle-green/21752014-1-bottlegreen?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000'}];
      }
    });
  }

  public categoryClicked(category: string) {
    this.router.navigate(['products'], {queryParams: { gender: this.gender, category} });
  }
}
