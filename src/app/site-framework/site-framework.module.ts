import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { InvalidSearchComponent } from './invalid-search/invalid-search.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProductsComponent } from '../products/view-all-products/view-all-products.component';
import { AppRoutingModule } from '../app-routing.module';

const routes:Routes = [
  
]

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    InvalidSearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    InvalidSearchComponent,
  ]
})
export class SiteFrameworkModule { }
