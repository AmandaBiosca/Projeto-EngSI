import { Injectable } from '@angular/core';
import { Product } from './objects/product';
import { PRODUCTS } from './mock-data/products';
import { PRODUCTS1 } from './mock-data/product1';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  popularURL = 'http://ec2-54-185-32-212.us-west-2.compute.amazonaws.com:8080/requisitar/maispop/24';
  userUrl = 'http://ec2-54-185-32-212.us-west-2.compute.amazonaws.com:8080/requisitar/bucarrelacionado/$$id/24'
  searchUrl = 'http://ec2-54-185-32-212.us-west-2.compute.amazonaws.com:8080/requisitar/busca/$$search/$$category/$$id/$$min/$$max/$$order'
  
  constructor(private http: HttpClient, private product: ProductService) { }

  getPopularProducts(): Observable<any> {
    return this.http.get(this.popularURL, this.httpOptions);
  }

  getUserProducts(id: number): Observable<any> {
    let customUrl = this.userUrl;

    customUrl = customUrl.replace('$$id', id.toString());
    return this.http.get(customUrl, this.httpOptions);
  }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductsId(): Product[] {
    return PRODUCTS1;
  }

  getFilterProducts(params: any):  Observable<any> {
    let customUrl = this.searchUrl;
    
    params.search = params.search.replace('$$', '$');

    customUrl = customUrl.replace('$$search', params.search || '0');  
    customUrl = customUrl.replace('$$category', params.category || '0');  
    customUrl = customUrl.replace('$$id', params.id || '0');  
    customUrl = customUrl.replace('$$min', params.min || '0');  
    customUrl = customUrl.replace('$$max', params.max || '0');  
    customUrl = customUrl.replace('$$order', params.order || '0'); 

    return this.http.get(customUrl, this.httpOptions);
  }

  getResults(idList: number[], callback: Function): any {
    // let products: any[] = [];
    
    // for(let i = 0; i < idList.length; i ++) {
    //   this.product.getProduct(idList[i]).subscribe(
    //     data => {
    //       products.push(data);
    //       if(i === idList.length - 1) {
    //         callback();
    //       }
    //     },
    //     error => {}
    //   )
    // }
    callback();
  }
}
