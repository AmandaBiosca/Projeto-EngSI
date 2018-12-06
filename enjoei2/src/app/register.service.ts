import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Register } from './objects/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  loginURL = 'https://enjoei2-perfil.herokuapp.com/perfil';

  constructor(private http: HttpClient) { }

  doRegister(register: Register): Observable<any> {
    return this.http.post<Register>(this.loginURL, register, this.httpOptions);
  }
}
