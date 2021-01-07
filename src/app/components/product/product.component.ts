import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('imageUrl') imageUrl = '';
  @Input('name') name = '';
  @Input('price') price = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

}
