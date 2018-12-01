import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @Output() loginAction = new EventEmitter<string>();
  @Output() logoutAction = new EventEmitter<string>();
  @Input() id: Number;

  isLogged: boolean = false;

  constructor() { }

  checkLogin () {
    if(this.id >= 0) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  ngOnInit() {
    this.checkLogin();
  }

  ngOnChanges() {
    this.checkLogin();
  }

  loginClick() {
    this.loginAction.emit('loginAction');
  }

  logoutClick() {
    this.logoutAction.emit('logoutAction');
  }
}
