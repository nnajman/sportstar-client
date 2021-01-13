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
    const totalQunatity = this.productsInBag.filter(p => p.name === product.name && p.size === product.size)
                                            .map(p => p.qty)
                                            .reduce((a, b) => a + b, 0);

    const p = 
      this.productsInBag.find(p => product.name === p.name && product.size === p.size && p !== product);

    if (p) {
      p.qty = totalQunatity;
      this.productsInBag.splice(this.productsInBag.indexOf(product), 1);
    } else {
      product.qty = totalQunatity;
    }
  }

  private getProductInBag(product: any): any {
    return this.productsInBag.find(p => p.name === product.name && p.size === product.size);
  }
}
