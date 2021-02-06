import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductComponent } from './components/products-page/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { CategoryComponent } from './components/categories-page/category/category.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { CheckoutProductComponent } from './components/checkout-page/checkout-product/checkout-product.component';
import { ShoppingCartProductComponent } from './components/shopping-cart/shopping-cart-product/shopping-cart-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    HomePageComponent,
    ShoppingCartComponent,
    ProductsPageComponent,
    CheckoutPageComponent,
    ShoppingCartComponent,
    CheckoutProductComponent,
    CategoriesPageComponent,
    ProductDetailsPageComponent,
    ShoppingCartProductComponent
  ],
  imports: [
    MatListModule,
    MatIconModule,
    BrowserModule,
    MatSelectModule,
    NgxSliderModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
