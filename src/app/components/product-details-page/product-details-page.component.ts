import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  public gender: string = '';
  public category: string = ''
  public product: any;
  public addItemForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.gender = this.route.snapshot.paramMap.get('gender') ?? '';
    this.category = this.route.snapshot.paramMap.get('category') ?? '';

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
}
