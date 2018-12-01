import { Injectable } from '@angular/core';
import { Product } from './objects/product';
import { PRODUCTS } from './mock-data/products';
import { PRODUCTS1 } from './mock-data/product1';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductsId(): Product[] {
    return PRODUCTS1;
  }
}
