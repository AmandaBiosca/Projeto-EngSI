import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../objects/login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closeLogin = new EventEmitter<String>();

  email: string = '';
  password: string = '';
  hide = true;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  closeLoginHandler(e) {
    if (e.srcElement === document.getElementsByClassName('login-overlay')[0]) {
      this.closeLogin.emit('closeLogin');
    }
  }

  loginHandler() {
    if (this.email !== '' && this.password !== '') {
      this.submit();
    } else {
      alert('Preencha todos os campos para prosseguir');
    }
  }

  submit() {
    const loginData: Login = {
      email: this.email,
      password: this.password
    };

    this.loginService.doLogin(loginData)
      .subscribe(data => console.log(data));
  }

}
