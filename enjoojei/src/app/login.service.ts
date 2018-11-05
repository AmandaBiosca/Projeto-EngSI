import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  loginURL = 'https://enjoei2-perfil.herokuapp.com/login';

  constructor(private http: HttpClient) { }

  doLogin (login: Login): Observable<any> {
    return this.http.post<Login>(this.loginURL, login, this.httpOptions);
  }
}
