import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() closeLogin = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  closeLoginHandler(e) {
    if (e.srcElement == document.getElementsByClassName('login-overlay')[0]) {
      this.closeLogin.emit('closeLogin');
    }
  }

}
