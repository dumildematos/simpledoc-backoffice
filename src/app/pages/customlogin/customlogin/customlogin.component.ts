import { Component, OnInit } from '@angular/core';
import { NbAuthSocialLink, NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-customlogin',
  templateUrl: './customlogin.component.html',
  styleUrls: ['./customlogin.component.scss']
})
export class CustomloginComponent extends NbLoginComponent {

  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: any;
  submitted: boolean;
  socialLinks: NbAuthSocialLink[];
  rememberMe: boolean;

  // constructor() {
  //   super();
  // }

  // ngOnInit(): void {
  // }


  logar(): any {
    console.log(this.user)
  }

}
