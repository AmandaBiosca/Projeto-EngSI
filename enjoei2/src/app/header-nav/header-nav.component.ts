import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PublicUser } from '../objects/publicUser';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @Output() loginAction = new EventEmitter<string>();
  @Output() menuAction = new EventEmitter<string>();
  @Input() id: number;
  @Input() user: PublicUser;

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

  menuClick() {
    this.menuAction.emit('menuAction');
  }
}
