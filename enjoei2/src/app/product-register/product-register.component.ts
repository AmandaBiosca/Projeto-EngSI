import { Component, OnInit } from '@angular/core';
import { ProductRegister } from '../objects/productRegister';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss']
})
export class ProductRegisterComponent implements OnInit {

  form: ProductRegister = {
    a_venda: true,
    categoria: '',
    condicao: '',
    desconto: 0, 
    descricao: '', 
    foto: '', 
    frete: 0,
    id_comprador: null, 
    id_vendedor: 0, 
    marca: '', 
    nome: '',
    preco: 0,
    qtde_curtidas: 0,
    tags: '',
    tamanho: 'medio'
  }
  constructor() { }

  ngOnInit() {
  }

}
