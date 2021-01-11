import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { CategoryComponent } from './components/category/category.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BagProductComponent } from './components/bag-product/bag-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductComponent,
    ProductDetailsPageComponent,
    ShoppingCartComponent,
    CategoriesPageComponent,
    CategoryComponent,
    BagProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
