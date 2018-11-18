import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enjoei2';
  showLogin: boolean;

  ngOnInit() {
    this.showLogin = false;  
  }

  openLogin() { this.showLogin = true; }
  closeLogin() { this.showLogin = false; }
}
