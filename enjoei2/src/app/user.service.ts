import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PrivateUser } from './objects/privateUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  publicURL = 'https://enjoei2-perfil.herokuapp.com/perfil/';
  privateURL = 'https://enjoei2-perfil.herokuapp.com/perfil/personalData/';

  constructor(private http: HttpClient) { }

  getPublicUser(id: number): Observable<any> {
    return this.http.get(this.publicURL + id, this.httpOptions);
  }

  getPrivateUser(id: number): Observable<any> {
    return this.http.get(this.privateURL + id, this.httpOptions);
  }

  savePrivateUser(data: any) {
    return this.http.put(this.publicURL + data.clientId, data, this.httpOptions);
  }
}
