import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PublicUser } from '../objects/publicUser';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})

export class UserMenuComponent implements OnInit {

  @Input() id: number;
  @Input() user: PublicUser;
  @Output() closeMenu = new EventEmitter<String>();
  @Output() logoutAction = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    
  }

  closeMenuHandler(e) {
    if (e.srcElement === document.getElementsByClassName('menu-overlay')[0]) {
      this.closeMenuAction();
    }
  }

  closeMenuAction() {
    this.closeMenu.emit('closeMenu');
  }

  logoutHandler() {
    this.logoutAction.emit('logoutAction');
    this.closeMenuAction();
  }

  goToConfiguration() {

  }

}
