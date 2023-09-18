import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

  viewProduct:any;
  productId:any;

  constructor(private service:ProductsDataService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'];
    })  

  this.service.viewProduct(this.productId).subscribe(data => {
    this.viewProduct =  data;
  })
  }
  

}
