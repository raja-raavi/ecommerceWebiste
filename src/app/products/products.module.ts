import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import { InvalidSearchComponent } from './invalid-search/invalid-search.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductModifiedComponent } from './update-product-modified/update-product-modified.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewProductComponent,
    ViewAllProductsComponent,
    ViewProductsByCategoryComponent,
    InvalidSearchComponent,
    UpdateProductModifiedComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
  ]
})
export class ProductsModule { }
