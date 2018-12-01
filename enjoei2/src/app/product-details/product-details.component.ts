import { Component, OnInit } from '@angular/core';
import { Product } from '../objects/product';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productDetails: Product[];

  constructor(private productListService: ProductListService) { }

  getProduct(): void {
    this.productDetails = this.productListService.getProductsId();
  }

  ngOnInit() {
    this.getProduct();
  }
}
