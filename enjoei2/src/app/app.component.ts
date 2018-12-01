import { Component } from '@angular/core';

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
  }

  logout() {
    window.localStorage.removeItem('enjoojeiUserID');
    this.id = -1;
  }
}
