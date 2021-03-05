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
      productInBag.quantity += product.quantity;
    }
  }

  public getBagProducts(): Array<any> { return this.productsInBag; }

  public getBagTotalQunatity(): number { 
    let count = 0;

    this.productsInBag.forEach(product => {
      count += product.quantity;
    });

    return count;
  }

  public getBagPrice(): number {
    let sum = 0;

    this.productsInBag.forEach(product => {
      sum += product.quantity * product.price;
    });
    
    return sum;
  }

  public removeProduct(product: any) {
    this.productsInBag.splice(this.productsInBag.indexOf(product), 1);
  }

  public productSizeChanged(product: any) {
    const totalQunatity = this.productsInBag.filter(p => p.name === product.name && p.size === product.size)
                                            .map(p => p.quantity)
                                            .reduce((a, b) => a + b, 0);

    const p = 
      this.productsInBag.find(p => product.name === p.name && product.size === p.size && p !== product);

    if (p) {
      p.quantity = totalQunatity;
      this.productsInBag.splice(this.productsInBag.indexOf(product), 1);
    } else {
      product.quantity = totalQunatity;
    }
  }

  private getProductInBag(product: any): any {
    return this.productsInBag.find(p => p.name === product.name && p.size === product.size);
  }
}
