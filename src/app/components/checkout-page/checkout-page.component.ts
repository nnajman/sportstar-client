import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  public deliveryForm!: FormGroup;

  constructor(private fb: FormBuilder,
             public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.deliveryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{9,10}')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public order() {

  }
}
