import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http:HttpClient) { 

  }

  getAllProducts(): Observable<products>{
    return this.http.get<products>('http://localhost:3000/products');
  }

  viewProduct(id:number): Observable<products>{
    return this.http.get<products>('http://localhost:3000/products/'+id);
  }

  updateProduct(id:number, productBody:products): Observable<products>{
    return this.http.put<products>('http://localhost:3000/products/'+id, productBody);
  }

  deleteProduct(id:number): Observable<products>{
    return this.http.delete<products>('http://localhost:3000/products/'+id);
  }

  createProduct(productBody: products): Observable<products>{
    return this.http.post<products>('http://localhost:3000/products', productBody);
  }

}