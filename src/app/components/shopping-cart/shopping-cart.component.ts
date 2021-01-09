import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {

  }

  public removeProduct(product: any) {
    const products = this.shoppingCartService.getProductsInBag();
    products.splice(products.indexOf(product), 1);
  }

}
