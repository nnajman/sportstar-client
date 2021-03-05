import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.scss']
})
export class ShoppingCartProductComponent implements OnInit {

  @Input('product') product: any;
  @Output('remove') removeEvent = new EventEmitter<any>();
  @Output('sizeChanged') sizeChangedEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public removeProduct() {
    this.removeEvent.emit(this.product);
  }

  public sizeChanged(size: string) {
    this.product.size = size;
    this.sizeChangedEvent.emit(this.product);
  }

  public quantityChanged(quantity: string) {
    this.product.quantity = +quantity;
  }
}
