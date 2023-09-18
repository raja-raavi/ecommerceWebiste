import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvalidSearchComponent } from './site-framework/invalid-search/invalid-search.component';
import { HomeComponent } from './site-framework/home/home.component';
import { SiteFrameWorkModule } from './site-framework/site-frame-work/site-frame-work.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: '**', component: InvalidSearchComponent},
  
];

@NgModule({
  imports: [
    SiteFrameWorkModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
