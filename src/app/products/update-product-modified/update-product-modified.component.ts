import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-update-product-modified',
  templateUrl: './update-product-modified.component.html',
  styleUrls: ['./update-product-modified.component.css']
})
export class UpdateProductModifiedComponent implements OnInit{

  id:any;
  productsData:any;
  constructor(private activatedRoute:ActivatedRoute, private productsService:ProductsDataService){

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    },error=>{
      alert("Something Went Wrong..!!");
    });

    this.productsService.getAllProducts().subscribe(data => {
      this.productsData = data;
    },error=>{
      alert("Something Went Wrong..!!");
    });
  }
  
}
