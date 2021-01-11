import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bag-product',
  templateUrl: './bag-product.component.html',
  styleUrls: ['./bag-product.component.scss']
})
export class BagProductComponent implements OnInit {

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

  public quantityChanged(qty: string) {
    this.product.qty = +qty;
  }
}
