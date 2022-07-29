import { UsuarioService } from './../service/usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { NbTreeGridDataSourceBuilder, NbTreeGridDataSource, NbSortDirection, NbSortRequest, NbComponentStatus } from '@nebular/theme';
import { SharedService } from '../../../@shared/shared.service';
import { TokenService } from '../../customlogin/token-service.service';
import { Usuario } from '../model/usuario';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}


@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  page: number = 0;
  size: number = 9999;

  customColumn = 'firstname';
  defaultColumns = ['lastname','username', 'phonenumber', 'country','birthdate' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<Usuario>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<Usuario>, private usuarioService: UsuarioService, private sharedService: SharedService) {
    // this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit() {
    this.list();
  }


  list(): void {
    this.usuarioService.list(this.page, this.size).subscribe({
      next: (resp: any) => {
        this.sharedService.closeLoader();
        let response = resp.content.map( user => {
          return  { data: user }
        })
        this.dataSource = this.dataSourceBuilder.create(response);

        console.log(response)
        // this.equipes = resp.content;
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
    })
  }



  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

}