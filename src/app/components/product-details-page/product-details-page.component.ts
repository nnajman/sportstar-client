import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  public gender: string = '';
  public category: string = ''
  public product: any;

  constructor(private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gender = params.gender;
      this.category = params.category;
      this.product = JSON.parse(params.product);
    });
  }

  public addToBag(product: any) {
    this.shoppingCartService.addToBag({...product, qty: 1});
    this.snackBar.open('Item has been added to the cart', undefined, {
      duration: 3000
    });
  }
}
