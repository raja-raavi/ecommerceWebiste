import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent{

  details:any;
  submittedDetails = false;
  productDetails = true;

  constructor(private service:ProductsDataService, private router:Router){

  }

  submit(){
    this.submittedDetails = true;
    this.productDetails = false;
  }
  
  goToHome(){
    this.router.navigate(['']);
  }

  viewProduct(){
    this.router.navigate(['/products/viewProduct/17'])
  }

  addNewProduct(productInfo:any){

    const newProduct = {
      id: 17,
      productName: productInfo.value.productName,
      productPrice: productInfo.value.productPrice,
      productRating: productInfo.value.productRating,
      productLink: productInfo.value.productLink,
      productCategory: productInfo.value.productCategory,
      productDescription: productInfo.value.productDescription,
      vendorName: productInfo.value.vendorName,
      reviews: productInfo.value.produReviews,
      inStock: productInfo.value.inStock,
      warranty: productInfo.value.productWarranty
    }

    this.service.createProduct(newProduct).subscribe(data => {
      console.log(data);
      this.details = data;
      
    })
  }

  
  
}
