import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'men', component: ProductsPageComponent },
  { path: 'women', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
