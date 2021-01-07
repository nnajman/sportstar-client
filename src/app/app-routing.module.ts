import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Men', component: ProductsPageComponent, data: {gender: 'Men'} },
  { path: 'Women', component: ProductsPageComponent, data: {gender: 'Women'} },
  { path: 'product-details', component: ProductDetailsPageComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
