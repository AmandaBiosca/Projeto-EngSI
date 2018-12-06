import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {Produto} from './produto/produto.model';
import {ProdutosService} from './produtos.service';

import { map, catchError, switchMap, debounceTime, distinctUntilChanged, } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class ProdutosComponent implements OnInit {

  searchBarState = 'hidden';
  produtos: Produto[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private produtosService: ProdutosService,
              private fb: FormBuilder) { }

  ngOnInit() {

  }
  // ngOnInit() {

  //   this.searchControl = this.fb.control('');
  //   this.searchForm = this.fb.group({
  //     searchControl: this.searchControl
  //   });

  //   this.searchControl.valueChanges
  //       .debounceTime(500)
  //       .distinctUntilChanged()
  //       .switchMap(searchTerm =>
  //         this.produtosService
  //           .produtos(searchTerm)
  //           .catchError(error => Observable.of([])))
  //       .subscribe(produtos => this.produtos = produtos);

  //   this.produtosService.produtos()
  //     .subscribe(produtos => this.produtos = produtos);
  // }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
