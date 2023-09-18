import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { products } from '../products';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit{

  productsData:any;
  productId:any;

  constructor(private productsService:ProductsDataService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit() {
    //to get product id
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'];
      console.log(this.productId);
      
    }) 
    
    //to get all products
    this.productsService.getAllProducts().subscribe(data => {
      this.productsData = data;
    });

    //to delete product
    
    this.productsService.deleteProduct(this.productId).subscribe(data =>{
      console.log(data);
      
    })
    }

    deleteBtnClicked(){
      window.alert("Please wait some time OR reload the page to make Changes....")
    }
  }


