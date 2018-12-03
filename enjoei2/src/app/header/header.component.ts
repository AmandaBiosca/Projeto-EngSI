import { Component, OnInit, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicUser } from '../objects/publicUser';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { defaultImg } from '../mock-data/image';
import { CommunicationService } from '../communication.service';

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
  @Input() id: number;

  showMenu: boolean = false;
  user: PublicUser;
  search: string = '';

  constructor(private router: Router,
    private formBuilder: FormBuilder, private el: ElementRef,
    private userService: UserService, private toastr: ToastrService,
    private communication: CommunicationService) { }

  ngOnInit() {
    this.inicializeFormBusca();
    this.checkUser();
    this.communication.triggerLogin.subscribe( action => {
      this.checkUser();
    });
  }

  searchAction() {
    if(this.router.url.indexOf('/home') < 0) {
      this.router.navigate(['/home']);
    } else {
      this.communication.search(this.search);
    }
  }

  checkUser() {
    if (this.id >= 0) {
      this.userService.getPublicUser(this.id)
        .subscribe(
          data => {
            if (data) {
              this.user = data;

              if (!this.user.profileImage) {
                this.user.profileImage = defaultImg;
              }

            } else {
              this.toastr.error('Informações do usuário não encontradas!', 'Algo deu errado!');
            }
          },
          error => {
            this.toastr.error('Não foi possível carregar as informações do usuário - (DEVs) Para ver a mensagem completa, abra o console do navegador', 'Algo deu errado!');
            console.log(error);
          });
    }
  }

  ngOnChanges() {
    this.checkUser();
  }

  inicializeFormBusca() {
    this.formBusca = this.formBuilder.group({});
    this.el.nativeElement.style.backgroundImage = this.color;
  }

  openLoginHandler() {
    this.openLogin.emit('openLogin');
  }

  logoutHandler() {
    this.logout.emit('logout');
  }

  closeMenu() {
    this.showMenu = false;
  }

  menuHandler() {
    this.showMenu = true;
  }
}
