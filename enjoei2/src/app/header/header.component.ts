import { Component, OnInit, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openLogin = new EventEmitter<string>();
  @Output() logout = new EventEmitter<string>();
  public formBusca: FormGroup;
  @Input() color;
  @Input() id: Number;


  constructor(private router: Router,
    private formBuilder: FormBuilder, private el: ElementRef) { }

  ngOnInit() {
    this.inicializeFormBusca();
  }

  inicializeFormBusca() {
    this.formBusca = this.formBuilder.group({});
    this.el.nativeElement.style.backgroundImage = this.color;
  }

  openLoginHandler() {
    this.openLogin.emit('openLogin');
  }
  
  logoutHandler() {
    debugger
    this.logout.emit('logout');
  }

}
