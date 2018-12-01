import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {Produto} from './produto/produto.model';

import {ENJOEI_API} from '../app.api';
import {ErrorHandler} from '../app.error-handler';

@Injectable()
export class ProdutosService {

    constructor(private http: Http) {}

    // produtos(search?: string): Observable<Produto[]> {
    //   return this.http.get(`${ENJOEI_API}/produtos`, {params: {q: search}})
    //     .pipe(map(response => console.log(response)).catchError(ErrorHandler.handleError));
    // }

    // public produtoById(id: string): Observable<Produto> {
    //   return this.http.get(`${ENJOEI_API}/produtos/${id}`)
    //     .pipe(
    //       map(response => console.log(response)),
    //       catchError(ErrorHandler.handleError));
    // }
}
