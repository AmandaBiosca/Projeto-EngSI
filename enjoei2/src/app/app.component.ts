import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enjoei2';
  showLogin: boolean;
  logged: boolean;
  id: number;

  constructor(private communication: CommunicationService) { }
  ngOnInit() {
    this.showLogin = false;
    const oldId = window.localStorage.getItem('enjoojeiUserID');

    if(oldId) {
      this.doLogin(oldId);
    }
  }

  openLogin() { this.showLogin = true; }
  closeLogin() { this.showLogin = false; }
  
  doLogin(id) {
    this.showLogin = false;
    this.id = id;
    window.localStorage.setItem('enjoojeiUserID', id);
    this.communication.login();
  }

  logout() {
    window.localStorage.removeItem('enjoojeiUserID');
    this.id = -1;
    this.communication.logout();
  }
}
