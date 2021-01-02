import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  currScrollPos = 0;

  constructor() { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + 
      document.documentElement.offsetHeight;
    const toolbar = window.document.getElementById('toolbar')!;
    toolbar.style.zIndex = pos < this.currScrollPos ? '1000' : '0';
    this.currScrollPos = pos;
  }

  ngOnInit(): void {
  }

}
