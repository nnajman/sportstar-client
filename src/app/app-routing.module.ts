import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: ':gender', component: CategoriesPageComponent },
  { path: ':gender/:category/:categoryId', component: ProductsPageComponent },
  { path: 'product/:productId', component: ProductDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
