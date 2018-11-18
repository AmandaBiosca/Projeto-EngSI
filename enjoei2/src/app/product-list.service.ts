import { Injectable } from '@angular/core';
import { Product } from './objects/product';
import { PRODUCTS } from './mock-data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}
