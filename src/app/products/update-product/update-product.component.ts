import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { products } from '../products';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  
  id:any;
  oldData:any;
  productsData:any;
  msg = false;
  updateProductForm = true;
 

  constructor(private productsService:ProductsDataService, private activatedRote:ActivatedRoute){

  }

  ngOnInit() {
    this.activatedRote.params.subscribe(data => {
      this.id = data['id']
    })

    this.productsService.viewProduct(this.id).subscribe(data =>{
      this.oldData = data;
    })

  }

  updateProduct(productInfo:any){
    const updatedProduct = {
      id: productInfo.value.productId,
      productName: productInfo.value.productName,
      productPrice: productInfo.value.productPrice,
      productRating: productInfo.value.productRating,
      productLink: productInfo.value.productLink,
      productCategory: productInfo.value.productCategory,
      productDescription: productInfo.value.productDescription,
      vendorName: productInfo.value.vendorName,
      reviews: productInfo.value.productReviews,
      inStock: productInfo.value.inStock,
      warranty: productInfo.value.productWarranty,
      
    }

    this.productsService.updateProduct(this.id, updatedProduct).subscribe(data =>{
      console.log(data);
      
    })
  }

  updateBtnClicked(){
    this.msg = true;
    this.updateProductForm = false;
  }
  
}
