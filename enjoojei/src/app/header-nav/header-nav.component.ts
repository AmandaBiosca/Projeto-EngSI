import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Output() loginAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  loginClick() {
    this.loginAction.emit('loginAction');
  }

}
