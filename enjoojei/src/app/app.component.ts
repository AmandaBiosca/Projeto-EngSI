import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'enjoojei';
  showLogin: boolean;

  ngOnInit() {
    this.showLogin = false;  
  }

  openLogin() { this.showLogin = true; }
  closeLogin() { this.showLogin = false; }
}
