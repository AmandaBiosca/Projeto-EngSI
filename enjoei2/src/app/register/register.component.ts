import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Register } from '../objects/register';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() closeRegister = new EventEmitter<String>();

  form: Register = {
    birthDate: null,
    cpf: '',
    ddd: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    sex: ''
  };

  loading: boolean = false;

  constructor(private registerService: RegisterService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  closeRegisterHandler () {
    this.closeRegister.emit('closeRegister');
  }

  registerHandler() {
    let valid = true;
    
    // for(let key in this.form) {
    //   if(this.form[key] === null || this.form[key] === '' ) {
    //     valid = false;
    //     break;
    //   }
    // }

    if(valid) {
      this.submit();
    } else {
      this.toastr.error('Preencha todos os campos para prosseguir', 'Algo deu errado!');
    }
  }

  submit() {
    this.loading = true;
    this.registerService.doRegister(this.form)
      .subscribe(
        data => {
          this.toastr.success('Usuário registrado com sucesso', 'Sucesso!');
          this.closeRegisterHandler();
          this.loading = false;
        },
        error => {
          error = error.error || {};
          this.toastr.error(error.error + ' - (DEVs) Para ver a mensagem completa, abra o console do navegador', 'Algo deu errado!');
          console.log(error.message);
          this.loading = false;
        });
  }

}
