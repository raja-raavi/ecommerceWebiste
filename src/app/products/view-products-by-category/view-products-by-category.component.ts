import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-view-products-by-category',
  templateUrl: './view-products-by-category.component.html',
  styleUrls: ['./view-products-by-category.component.css'],
})
export class ViewProductsByCategoryComponent implements OnInit {
  filteredProducts: any;
  AllProducts: any;

  constructor( private acviatedRoute: ActivatedRoute ,private productsService: ProductsDataService) {
    
  }

  ngOnInit(): void {
    //to get all products
    this.productsService.getAllProducts().subscribe((data) => {
    this.AllProducts = data;

      this.acviatedRoute.queryParams.subscribe((data) => {
        //console.log(data);
      let Usercategory = data['productCategory'];
        //console.log(Usercategory);

        if (Usercategory) {
          this.filteredProducts = this.AllProducts.filter((data: { productCategory: any }) => {
              console.log(data);
              return data.productCategory == Usercategory;
            }
          );
        } else {
          this.filteredProducts = this.AllProducts;
        }
      });
    });
  }
}
