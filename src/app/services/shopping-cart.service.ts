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

  public getProductsCount(): number { 
    let count = 0;

    this.productsInBag.forEach(product => {
      count += product.qty;
    });

    return count;
  }

  public getBagPrice(): number {
    let sum = 0;

    this.productsInBag.forEach(product => {
      sum += product.qty * product.price;
    });
    
    return sum;
  }
}
