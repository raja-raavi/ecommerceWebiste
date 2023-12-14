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
import { AuthenticationGuard } from '../guards/authentication.guard';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path:'createProduct', component: CreateProductComponent, canActivate: [AuthenticationGuard]},
  { path:'deleteProduct/:id', component: DeleteProductComponent, canActivate: [AuthenticationGuard]},
  { path:'updateProduct/:id', component: UpdateProductComponent, canActivate: [AuthenticationGuard]},
  { path:'updateProductModified/:id', component: UpdateProductModifiedComponent, canActivate: [AuthenticationGuard]},
  { path:'viewAllProducts', component: ViewAllProductsComponent, canActivate: [AuthenticationGuard]},
  { path:'viewProduct/:id', component: ViewProductComponent, canActivate: [AuthenticationGuard]},
  { path:'viewProductBycategory', component:ViewProductsByCategoryComponent, canActivate: [AuthenticationGuard]},
  { path:'**', component: InvalidSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
