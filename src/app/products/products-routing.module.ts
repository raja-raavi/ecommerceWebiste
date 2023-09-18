import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import { InvalidSearchComponent } from './invalid-search/invalid-search.component';
import { UpdateProductModifiedComponent } from './update-product-modified/update-product-modified.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path:'createProduct', component: CreateProductComponent},
  { path:'deleteProduct/:id', component: DeleteProductComponent},
  { path:'updateProduct/:id', component: UpdateProductComponent},
  { path:'updateProductModified/:id', component: UpdateProductModifiedComponent},
  { path:'viewAllProducts', component: ViewAllProductsComponent},
  { path:'viewProduct/:id', component: ViewProductComponent},
  { path:'viewProductBycategory', component:ViewProductsByCategoryComponent},
  { path:'**', component: InvalidSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
