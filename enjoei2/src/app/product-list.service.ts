import { Injectable } from '@angular/core';
import { Product } from './objects/product';
import { PRODUCTS } from './mock-data/products';
import { PRODUCTS1 } from './mock-data/product1';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  popularURL = 'http://ec2-54-185-32-212.us-west-2.compute.amazonaws.com:8080/requisitar/maispop';

  constructor(private http: HttpClient) { }

  getPopularProducts(): Observable<any> {
    return this.http.get(this.popularURL, this.httpOptions);
  }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductsId(): Product[] {
    return PRODUCTS1;
  }
}
