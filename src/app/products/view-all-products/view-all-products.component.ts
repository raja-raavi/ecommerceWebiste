import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit{

  productsData:any;

  constructor(private productsService:ProductsDataService){

  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(data => {
      this.productsData = data;
    });
    
  }
}
