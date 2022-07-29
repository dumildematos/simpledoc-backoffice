import { Component, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { SharedService } from '../../../@shared/shared.service';
import { TokenService } from '../../customlogin/token-service.service';
import { Equipe } from '../model/equipe';
import { EquipeService } from '../service/equipe.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  page: number = 0;
  size: number = 9999;
  equipes: Equipe [];

  constructor(private equipeService: EquipeService, private sharedService: SharedService, private tokenService: TokenService) { }

  ngOnInit() {
    this.list();
  }

  list(): void {
    this.equipeService.list(this.page, this.size).subscribe({
      next: (resp: any) => {
        this.sharedService.closeLoader();
        this.equipes = resp.content;
      },
      error: (error) => {
        this.sharedService.closeLoader();
        let status: NbComponentStatus = 'danger';
        if(error.error.error_message.includes('The Token has expired')){
          this.sharedService.showToast(status, 'Erro', error.error.error_message);
          this.sharedService.tokenExpired();
        }else {
          this.sharedService.showToast(status, 'Erro', error.error.error_message);
        }
      }
    });
  }

}
