import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../objects/product';
import { ProductListService } from '../product-list.service';
import { ToastrService } from 'ngx-toastr';
import { PRODUCTS } from '../mock-data/products';
import { CommunicationService } from '../communication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  productList: Product[];
  id: number;
  requestLine: number[];
  hasMore: boolean = false;
  loading: boolean = false;
  title: string = 'Populares';
  hardLoad: boolean = true;
  subscription: any;
  subscription2: any;
  subscription3: any;
  search: string = '';

  constructor(private productListService: ProductListService,
    private toastr: ToastrService, private communication: CommunicationService,
    private route: ActivatedRoute) { }


  resetProductList(newIds: number[]) {
    this.productList = [];
    //this.requestLine = newIds;
    this.requestLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    this.getPage();
  }

  getPage() {
    if (this.requestLine.length) {
      this.loading = true;
      let nextRequest = this.requestLine.splice(0, 8);
      this.productListService.getResults(nextRequest).subscribe(
        data => {
          //mock
          data = PRODUCTS;
          for (let i = 0; i < data.length; i++) {
            this.productList.push(data[i]);
          }

          if (this.requestLine.length > 0) {
            this.hasMore = true;
          } else {
            this.hasMore = false;
          }
          this.hardLoad = false;
          this.loading = false;
        },
        error => {
          this.toastr.error('Não foi possível obter os produtos solicitados', 'Algo deu errado!');
          console.log(error);
          this.loading = false;
          this.hardLoad = false;
        }
      )
    } else {
      this.hardLoad = false;
    }
  }

  getUserProducts(): void {
    this.search = null;
    this.hardLoad = true;
    if (this.id) {
      this.title = "Especialmente para você"
      this.productListService.getUserProducts(this.id).subscribe(
        data => {
          this.resetProductList([1, 2]);
        },
        error => {
          this.toastr.error('Não foi possível obter os produtos para o usuário', 'Algo deu errado!');
          console.log(error);
          this.hardLoad = false;
        }
      )
    } else {
      this.title = "Populares"
      this.productListService.getPopularProducts().subscribe(
        data => {
          this.resetProductList([1, 2]);
        },
        error => {
          this.toastr.error('Não foi possível obter os produtos populares', 'Algo deu errado!');
          console.log(error);
          this.hardLoad = false;
        }
      )
    }
  }

  searchAction(search: string) {

    var params: any = {
      search: search
    }

    if (this.id >= 0) {
      params.id = this.id;
    }

    this.productListService.getFilterProducts(params).subscribe(
      data => {
        this.resetProductList([1, 2]);
      },
      error => {
        this.toastr.error('Não foi possível realziar a busca', 'Algo deu errado!');
        console.log(error);
        this.hardLoad = false;
      }
    )
  }

  initialize() {
    let id: any = window.localStorage.getItem('enjoojeiUserID');
    id = parseInt(id);
    if (id >= 0) {
      this.id = parseInt(id);
    } else {
      this.id = null;
    }

    this.getUserProducts();
  }

  ngOnInit() {
    this.initialize();

    this.subscription2 = this.communication.triggerAccess.subscribe(
      data => {
        this.initialize();
      }
    )

    this.subscription3 = this.communication.triggerLogout.subscribe(
      data => {
        this.initialize();
      }
    )

    this.subscription = this.communication.triggerSearch.subscribe(
      string => {
        this.hardLoad = true;
        this.search = string;
        if (string.trim() !== '') {
          this.searchAction(string);
        } else {
          this.getUserProducts();
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
}
