import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  public deliveryForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.deliveryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{9,10}')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public order() {
    const formFields = this.deliveryForm.value;
    const products = this.shoppingCartService.getBagProducts()
      .map((product: Product) => {
        return {
          product: product._id,
          quantity: product.quantity,
          size: product.size,
          price: product.price
        }
    });
  

    this.http.post('http://localhost:8080/orders', {
      ...this.deliveryForm.value,
      products
    })
  }
}
