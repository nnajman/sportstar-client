import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private productsInBag: Array<any> = new Array<any>();

  constructor() { }

  public addToBag(product: any) {
    const productInBag = this.getProductInBag(product);
    
    if (!productInBag) {
      this.productsInBag.push(product);
    } else {
      productInBag.qty += product.qty;
    }
  }

  public getBagProducts(): Array<any> { return this.productsInBag; }

  public getBagTotalQunatity(): number { 
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

  public removeProduct(product: any) {
    this.productsInBag.splice(this.productsInBag.indexOf(product), 1);
  }

  public productSizeChanged(product: any) {
    product.qty = this.productsInBag.filter(p => p.name === product.name && p.size === product.size)
                                     .map(p => p.qty)
                                     .reduce((a, b) => a + b, 0);

    this.productsInBag = this.productsInBag.filter(p => (p.name !== product.name) ||
      (p.name === product.name && p.size !== product.size));
    this.productsInBag.push(product);
  }

  private getProductInBag(product: any): any {
    return this.productsInBag.find(p => p.name === product.name && p.size === product.size);
  }
}
