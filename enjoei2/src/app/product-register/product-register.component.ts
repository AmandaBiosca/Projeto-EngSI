import { Component, OnInit } from '@angular/core';
import { ProductRegister } from '../objects/productRegister';
import { ToastrService } from 'ngx-toastr';
import { ProductRegisterService } from '../product-register.service';
import { UploadService } from '../upload.service';

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
    foto: null,
    frete: 0,
    id_vendedor: 0,
    marca: '',
    nome: '',
    preco: 0,
    qtde_curtidas: 0,
    tags: '',
    tamanho: ''
  }
  sending: boolean = false;
  showError: boolean = false;
  showForm: boolean = false;

  constructor(private toastr: ToastrService,
    private registerService: ProductRegisterService) { }

    imageUpload(e) {
    let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      this.toastr.error('Formato de arquivo inválido', 'Algo deu errado!');
      return null;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.form.foto = reader.result.split('base64,')[1];
  }

  saveHandler() {
    let valid = true;
    console.log(this.form)
    for (let key in this.form) {
      if (this.form[key] === '' || this.form[key] === null) {
        valid = false;
        break;
      }
    }

    if (valid) {
      this.submit();
    } else {
      this.toastr.error('Preencha todos os campos para prosseguir', 'Algo deu errado!');
    }
  }

  resetForm() {
    const oldId = this.form.id_vendedor || -1;

    this.form = {
      a_venda: true,
      categoria: '',
      condicao: '',
      desconto: 0,
      descricao: '',
      foto: null,
      frete: 0,
      id_vendedor: oldId,
      marca: '',
      nome: '',
      preco: 0,
      qtde_curtidas: 0,
      tags: '',
      tamanho: ''
    }
  }

  submit() {
    this.sending = true;
    this.registerService.doRegister(this.form)
      .subscribe(
        data => {
          this.toastr.success('Publicação registrada com sucesso', 'Sucesso!');
          this.resetForm();
          this.sending = false;
        },
        error => {
          this.toastr.error('Não foi possível registar o produto. (DEVs) Para ver a mensagem completa, abra o console do navegador', 'Algo deu errado!');
          console.log(error);
          this.sending = false;
        });
  }

  ngOnInit() {
    this.form.id_vendedor = parseInt(window.localStorage.getItem('enjoojeiUserID') || '-1');

    if (this.form.id_vendedor < 0) {
      this.showError = true;
    } else {
      this.showForm = true;
    }
  }

}
