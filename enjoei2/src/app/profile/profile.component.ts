import { Component, OnInit } from '@angular/core';
import { PrivateUser } from '../objects/privateUser';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { defaultImg } from '../mock-data/image';
import { LoginService } from '../login.service';
import { Login } from '../objects/login';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: PrivateUser;
  loading: boolean = true;
  error: boolean = false;
  sending: boolean = false;
  showPassword: boolean = false;
  hide: boolean = true;
  hide2: boolean = true;
  hide3: boolean = true;
  oldPassword: string;
  password: string;
  password2: string;
  oldEmail: string;
  sendingPassword: boolean = false;

  constructor(private toastr: ToastrService,
    private userService: UserService, private loginService: LoginService) { }

  showPasswordFields() {
    this.showPassword = true;
  }

  hidePasswordFields() {
    this.showPassword = false;
    this.password = '';
    this.password2 = '';
    this.oldPassword = '';
  }

  savePasswordFields() {
    if (this.oldPassword.trim() === '' || this.password.trim() === '' || this.password2.trim() === '') {
      this.toastr.error('Preencha todos os campos para alterar a senha', 'Algo deu errado!');
      return;
    }

    if (this.password !== this.password2) {
      this.toastr.error('As senhas novas informadas estão diferentes', 'Algo deu errado!');
      return;
    }

    this.sendingPassword = true;

    const auth: Login = {
      email: this.oldEmail,
      password: this.oldPassword
    }

    this.loginService.doLogin(auth).subscribe(
      data => {

        const saveData = {
          id: this.user.clientId,
          client: {
            password: this.password
          }
        }

        this.userService.savePrivateUser(saveData).subscribe(
          data => {
            this.toastr.success('Senha alterada com sucesso', 'Sucesso');
            this.hidePasswordFields();
            this.fetchUser()
            this.sendingPassword = false;
          },
          error => {
            this.toastr.error('Não foi possível alterar a senha. (DEVs) Abrir o console para mais informações', 'Algo deu errado!');
            this.sendingPassword = false;
          }
        )
      },
      error => {
        error = error.error || {};
        this.toastr.error(
          (error.errors[0] || {}).message || 'Problema não esperado, desculpe pelo inconveniente',
          'Algo deu errado'
        );
        this.sendingPassword = false;
      }
    )
  }

  parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.loading = true;
    this.error = false;
    this.sending = false;

    const id = window.localStorage.getItem('enjoojeiUserID');

    if (id) {
      this.userService.getPrivateUser(parseInt(id))
        .subscribe(
          data => {

            if (data) {
              data.birthDate = this.parseISOString(data.birthDate);
              this.user = data;
              this.oldEmail = this.user.email;
              if (!this.user.profileImage) {
                this.user.profileImage = defaultImg;
              }
            } else {
              this.error = true;
            }

            this.loading = false;
          },
          error => {
            this.toastr.error('Não foi possível acessar os dados do usuário. (DEVs) Abrir o console para mais informações', 'Algo deu errado!');
            console.log(error);
            this.loading = false;
            this.error = true;
          }
        )
    } else {
      this.toastr.error('Não foi possível acessar os dados do usuário', 'Algo deu errado!');
      this.loading = false;
      this.error = true;
    }
  }

  saveHandler() {
    this.saveAction();
  }

  saveAction() {
    this.sending = true;

    const data = {
      id: this.user.clientId,
      client: { ...this.user }
    };

    this.userService.savePrivateUser(data)
      .subscribe(
        data => {
          this.toastr.success('Usuário atualizado com sucesso', 'Sucesso');
          this.fetchUser()
        },
        error => {
          this.toastr.error('Não foi possível atualizar o usuario. (DEVs) Abrir o console para mais informações','Algo deu errado!')
          console.log(error)
          this.sending = false;
        }
      )
  }
}
