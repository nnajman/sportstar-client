import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.scss']
})
export class CheckoutProductComponent implements OnInit {
  @Input('product') product: any;

  constructor() { }

  ngOnInit(): void {
  }

}
