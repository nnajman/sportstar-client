import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
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
import { SocketioService } from './socketio.service';

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
    FormsModule,
    MatListModule,
    MatIconModule,
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    NgxSliderModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
