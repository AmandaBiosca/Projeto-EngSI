import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  url = 'https://dry-escarpment-83331.herokuapp.com/v2/api-docs/produto/'
  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(this.url + id, this.httpOptions);
  }
}
