import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  public product$!: Observable<Product>;
  public addItemForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private productsService: ProductsService,
              public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.product$ = this.productsService.getProduct(this.route.snapshot.paramMap.get('productId') ?? '');

    this.addItemForm = this.fb.group({
      size: ['', Validators.required]
    });
  }

  public addToBag() {
    this.product$.subscribe(product => {
      this.shoppingCartService.addToBag({...product, quantity: 1, size: this.addItemForm.value.size});
      this.snackBar.open('Item has been added to the cart', undefined, {
        duration: 3000
      });
    });
  }

  public navigateToProductsPage() {
    this.product$.subscribe((product: Product) => {
      this.router.navigate([`${product.category.gender}/${product.category.title}/${product.category._id}`]);
    });
  }
}
