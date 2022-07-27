import { Component, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SharedService } from '../../../@shared/shared.service';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  size = 20;
  page = 0;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Nome',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private categoriaService: CategoriaService, private sharedService: SharedService) {

  }
  ngOnInit() {
    this.listCategories();
  }

  listCategories(): void {
    this.sharedService.openLoader();
    this.categoriaService.list(this.page, this.size).subscribe({
      next: (resp: any) => {
        this.sharedService.closeLoader();
        this.source.load(resp.content);
      },
      error: (error) => {
        this.sharedService.closeLoader();
        let status: NbComponentStatus = 'danger';
        this.sharedService.showToast(status, 'Erro', error.error.error_message);
        this.sharedService.tokenExpired();
      }
    })
  }

  onDeleteConfirm(event): void {
    this.sharedService.confirmDelete((result) => {
      if(result) {
        this.sharedService.closeLoader();
        this.categoriaService.delete(event.data.id).subscribe({
          next: () => {
            event.confirm.resolve();
            let status: NbComponentStatus = 'success';
            this.sharedService.showToast(status, 'Sucesso', 'Operação realizada com sucesso!');
            this.listCategories();
          },
          error: (error) => {
            this.sharedService.closeLoader();
            let status: NbComponentStatus = 'danger';
            this.sharedService.showToast(status, 'Erro', error.error.error_message);
            this.sharedService.tokenExpired();
          }
        })
      }else {
        event.confirm.reject();
      }
    })

  }

  onCreateConfirm(event): void {
    this.sharedService.openLoader();
    if(event && event.newData) {
      if(event.newData.name !== '') {
        let category: Categoria = {
          id: null,
          name: event.newData.name
        };
        this.categoriaService.create(category).subscribe({
          next: (resp) => {
            event.confirm.resolve(event.newData);
            let status: NbComponentStatus = 'success';
            this.sharedService.showToast(status, 'Sucesso', 'Operação realizada com sucesso!');
            this.listCategories();
          },
          error: (error) => {
            this.sharedService.closeLoader();
            let status: NbComponentStatus = 'danger';
            this.sharedService.showToast(status, 'Erro', error.error.error_message);
            this.sharedService.tokenExpired();
          }
        });
      }else {
        this.sharedService.closeLoader();
        let status: NbComponentStatus = 'danger';
        this.sharedService.showToast(status, 'Erro', 'Campo vázio');
      }
    }
  }

  onEditConfirm(event): void {
    this.sharedService.openLoader();
    if(event && event.newData) {
      if(event.newData.name !== '') {
        let category: Categoria = {
          id: event.newData.id,
          name: event.newData.name
        };
        this.categoriaService.create(category).subscribe({
          next: (resp) => {
            event.confirm.resolve(event.newData);
            let status: NbComponentStatus = 'success';
            this.sharedService.showToast(status, 'Sucesso', 'Operação realizada com sucesso!');
            this.listCategories();
          },
          error: (error) => {
            this.sharedService.closeLoader();
            let status: NbComponentStatus = 'danger';
            this.sharedService.showToast(status, 'Erro', error.error.error_message);
            this.sharedService.tokenExpired();
          }
        });
      }else {
        this.sharedService.closeLoader();
        let status: NbComponentStatus = 'danger';
        this.sharedService.showToast(status, 'Erro', 'Campo vázio');
      }
    }
  }


}
