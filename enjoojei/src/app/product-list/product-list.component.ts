import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productListService: ProductListService) { }

  getProducts(): void {
    this.productList = this.productListService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

}
