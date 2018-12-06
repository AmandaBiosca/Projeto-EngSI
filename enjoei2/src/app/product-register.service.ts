import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ProductRegister } from './objects/productRegister';

@Injectable({
  providedIn: 'root'
})
export class ProductRegisterService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  registerUrl: string = 'https://nuga1kfpx4.execute-api.sa-east-1.amazonaws.com/ver4/cadastro/post_cadastro';

  constructor(private http: HttpClient) { }

  doRegister(register: ProductRegister): Observable<any> {
    return this.http.post(this.registerUrl, {
      "a_venda": true,
      "categoria": "Vestimenta",
      "condicao": "Em bom estado de uso",
      "desconto": 20,
      "descricao": "camiseta laranja confortavel",
      "foto": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAJdnBBZwAAAeAAAAHgAPpdNOQAAAANSURBVBhXY/hfr/4fAAbLAqUa4S1PAAAAAElFTkSuQmCC",
      "frete": 5,
      "id_comprador": 1,
      "id_vendedor": 3,
      "marca": 5,
      "nome": "camiseta confortavel",
      "preco": 20,
      "qtde_curtidas": 30,
      "tags": "Camiseta, Confortavel, Medio, Unissex",
      "tamanho": "Medio"
    }, this.httpOptions);
  }
}
