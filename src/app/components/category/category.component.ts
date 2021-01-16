import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input('category') category: any;

  constructor() { }

  ngOnInit(): void {
  }

}
