import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import {
  NbComponentStatus
} from '@nebular/theme';
import { SharedService } from '../../../@shared/shared.service';
import { CustomloginService } from '../customlogin.service';
import { UserLogin } from '../model/User';
import { TokenService } from '../token-service.service';

interface Login {
  username: string;
  password: string;
}
@Component({
  selector: 'ngx-customlogin',
  templateUrl: './customlogin.component.html',
  styleUrls: ['./customlogin.component.scss']
})
export class CustomloginComponent extends NbLoginComponent implements OnInit {

  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: Login;
  submitted: boolean;
  rememberMe: boolean;

  estado1 = false;
  estado2 = false;
  messagem = null;
  usuario: any;


  constructor(protected customloginService: CustomloginService,
    private sharedService: SharedService,
    private tokenService: TokenService,
    protected router: Router,
    private title: Title
    ) {
    super(null, null, null, null);
  }

  ngOnInit(): void {
    this.title.setTitle('SimpleDoc | Backoffice :: Login');
  }


  logar(): void {
    this.sharedService.openLoader();
    const formLogin: UserLogin = {
      username: this.user.username,
      password: this.user.password
    }
    this.customloginService.userLogin(formLogin).subscribe(
      resp => {
        console.log(resp)
        if(resp.status === 200) {
          this.estado1 = true;
          this.estado2 = false;
          this.messagem = "Bem-vindo";

          this.tokenService.setToken('access_token', resp.access_token);
          this.tokenService.setToken('refresh_token', resp.refresh_token);

          this.customloginService.userDetails().subscribe(
            {
              next: (res: any) =>  {
                let hasAdminRole = res.roles.filter(role => role.name === 'ROLE_ADMIN');
                if(hasAdminRole.length > 0) {
                  this.sharedService.closeLoader();
                  this.tokenService.setObjectItem('user', res);
                  this.router.navigate(['/pages'])
                }else {
                  this.sharedService.closeLoader();
                  let status: NbComponentStatus = 'danger';
                  this.sharedService.showToast(status, 'Erro', 'Não possui permissão para efetuar o login no backoffice');
                  this.estado2 = false;
                  this.estado1 = true;
                  this.messagem = "Não possui permissão para efetuar o login no backoffice";
                }
              },
              error: (error: any) => {
                this.sharedService.closeLoader();
              let status: NbComponentStatus = 'danger';
              if(error.error.error_message.includes('The Token has expired')){
                this.sharedService.showToast(status, 'Erro', error.error.error_message);
                this.sharedService.tokenExpired();
              }else {
                this.sharedService.showToast(status, 'Erro', error.error.error_message);
              }
              }
            }
          )

        }else {
          this.sharedService.closeLoader();
          this.estado2 = true;
          this.estado1 = false;
          this.messagem = "Verifique seus dados";
        }
      },
      error => {
        console.log(error)
        this.sharedService.closeLoader();
        this.estado2 = true;
        this.estado1 = false;
        this.messagem = "Verifique seus dados";
      }
    )
    // this.router.navigate(['/dashboard']);
  }

}
