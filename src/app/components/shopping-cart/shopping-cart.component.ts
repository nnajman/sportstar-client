import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router,
    public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {

  }

  public removeProduct(product: any) {
    this.shoppingCartService.removeProduct(product);
  }

  public productSizeChanged(product: any) {
    this.shoppingCartService.productSizeChanged(product);
  }

  public checkout() {
    this.router.navigate(['/checkout']);
  }
}
