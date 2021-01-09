import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private productsInBag: Array<any> = new Array<any>();

  constructor() { }

  public addToBag(product: any) {
    this.productsInBag.push(product);
  }

  public getProductsInBag(): Array<any> { return this.productsInBag; }

  public getProductsCount(): number { return this.productsInBag.length; }

  public getBagPrice(): number {
    return this.productsInBag.map(product => product.price).reduce(
      (a, b) => a + b, 0
    );
  }
}
