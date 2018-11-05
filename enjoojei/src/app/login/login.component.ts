import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() closeLogin = new EventEmitter<String>();

  login: string = '';
  password: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  closeLoginHandler(e) {
    if (e.srcElement == document.getElementsByClassName('login-overlay')[0]) {
      this.closeLogin.emit('closeLogin');
    }
  }

  loginHandler() {
    if(this.login !== "" && this.password !== "") {
      this.submit();
    } else {
      alert('Preencha todos os campos para prosseguir');
    }
  }

  submit() {
    const loginData: Login = {
      login: this.login,
      password: this.login
    };

    this.loginService.doLogin(loginData)
      .subscribe(data => console.log(data));
  }

}
