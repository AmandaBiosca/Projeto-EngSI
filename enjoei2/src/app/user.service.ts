import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  loginURL = 'https://enjoei2-perfil.herokuapp.com/perfil/';

  constructor(private http: HttpClient) { }

  getPublicUser(id: number): Observable<any> {
    return this.http.get(this.loginURL + id, this.httpOptions);
  }
}
