import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../objects/login';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closeLogin = new EventEmitter<String>();
  @Output() doLogin = new EventEmitter<String>();

  email: string = '';
  password: string = '';
  hide: boolean = true;
  showLoginForm: boolean = true;
  loginClass: string = '';
  showRegisterForm: boolean = false;
  loading: boolean = false;

  constructor(private loginService: LoginService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  doLoginHandler(id) {
    this.doLogin.emit(id);
  }

  openRegister() {
    this.loginClass = 'register';
    this.showLoginForm = false;
    setTimeout( () => {
      this.showRegisterForm = true;

    }, 300);
  }

  closeRegisterAction() {
    this.loginClass = '';
    this.showRegisterForm = false;
    setTimeout( () => {
      this.showLoginForm = true;

    }, 300);
  }

  closeLoginHandler(e) {
    if (e.srcElement === document.getElementsByClassName('login-overlay')[0] && this.showLoginForm) {
      this.closeLogin.emit('closeLogin');
    }
  }

  loginHandler() {
    if (this.email !== '' && this.password !== '') {
      this.submit();
    } else {
      this.toastr.error('Preencha todos os campos para prosseguir', 'Algo deu errado!');
    }
  }

  submit() {
    this.loading = true;
    const loginData: Login = {
      email: this.email,
      password: this.password
    };

    this.loginService.doLogin(loginData)
      .subscribe(
        data => {
          this.toastr.success('Login efetuado com sucesso!', 'Sucesso');
          const id = data.message;
          this.doLoginHandler(id);
          this.loading = false;
        },
        error => {
          error = error.error || {};
          this.toastr.error(
            (error.errors[0] || {}).message || 'Problema não esperado, desculpe pelo inconveniente',
            'Algo deu errado'
          );
          this.loading = false;
        });
  }

}
