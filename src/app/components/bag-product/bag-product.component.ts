import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bag-product',
  templateUrl: './bag-product.component.html',
  styleUrls: ['./bag-product.component.scss']
})
export class BagProductComponent implements OnInit {

  @Input('product') product: any;

  constructor() { }

  ngOnInit(): void {
  }

}
