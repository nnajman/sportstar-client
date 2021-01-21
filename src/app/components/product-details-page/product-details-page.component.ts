import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  public product!: Product;
  public addItemForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = JSON.parse(params.product);
    });

    this.addItemForm = this.fb.group({
      size: ['', Validators.required]
    });
  }

  public addToBag() {
    this.shoppingCartService.addToBag({...this.product, qty: 1, size: this.addItemForm.value.size});
    this.snackBar.open('Item has been added to the cart', undefined, {
      duration: 3000
    });
  }

  public navigateToProductsPage() {
    this.router.navigate([`${this.product.category.gender}/${this.product.category.title}`, 
      { category: JSON.stringify(this.product.category)}])
  }
}
