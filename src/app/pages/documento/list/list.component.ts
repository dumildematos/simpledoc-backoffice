import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbDialogService } from '@nebular/theme';
import { SharedService } from '../../../@shared/shared.service';
import { NewsService } from '../../layout/news.service';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';
import {  DocumentListResult, Documento, DocumentoAction, DocumentoDetail } from '../model/documento';
import { DocumentoService } from '../service/documento.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  size: number = 20;
  page: number = 0;

  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  docs: DocumentListResult;

  constructor(private newsService: NewsService,
    private documentoService: DocumentoService,
    private sharedService: SharedService,
    private dialogService: NbDialogService) { }

  ngOnInit() {
    this.listDocs();
  }

  listDocs(): void {
    this.sharedService.openLoader();
    this.documentoService.list(this.page, this.size).subscribe({
      next: async (data: DocumentListResult) => {
        this.sharedService.closeLoader();
        this.docs = await data;
        // console.log(data);
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
    })
  }

  // loadNext(cardData) {
  //   if (cardData.loading) { return; }

  //   cardData.loading = true;
  //   cardData.placeholders = new Array(this.pageSize);
  //   this.documentoService.load(cardData.pageToLoadNext, this.pageSize)
  //     .subscribe({
  //       next: (nextNews) => {
  //         console.log(nextNews)
  //         cardData.placeholders = [];
  //         cardData.news.push(...nextNews);
  //         cardData.loading = false;
  //         cardData.pageToLoadNext++;
  //       },
  //       error: (err) => {
  //         console.log(err)
  //       }
  //     });
  // }

  createModal(): void {
    this.dialogService.open(CreateComponent, {
      context: {
        title: 'Novo Documento',
      },
    })
    .onClose.subscribe(documento => {
      if(documento) {
        this.create(documento)
      }
    });
  }

  editModal(title: any, documentoAction: DocumentoAction): void {
    this.dialogService.open(EditComponent, {
      context: {
        title: title,
        documentoAction: documentoAction
      }
    })
    .onClose.subscribe(documento => {
      if(documento) {
        this.update(documento)
      }
    });
  }

  create(documento: Documento): void {
    this.sharedService.openLoader();
    this.documentoService.create(documento).subscribe({
      next: (data: any) => {
        this.sharedService.closeLoader();
        let status: NbComponentStatus = 'success';
        this.sharedService.showToast(status, 'Sucesso', 'Operação realizada com sucesso!');
        this.listDocs();
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
    })
  }

  action(event: DocumentoAction): void {
    if(event.operation === 'delete') {
      this.delete(event.documento.id);
    }else {
      let title = event.operation == 'edit' ? 'Editar Documento' : 'Visualizar';
      this.editModal(title, event);
    }
  }

  delete(id: number): void{
    this.sharedService.confirmDelete((result) => {
      if(result) {
        this.sharedService.openLoader();
        this.documentoService.delete(id).subscribe({
          next: (resp: any) => {
            let status: NbComponentStatus = 'success';
            this.sharedService.showToast(status, 'Sucesso', 'Operação realizada com sucesso!');
            this.listDocs();
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
        })
      }
    })
  }

  update(documento: DocumentoDetail): void {
    this.sharedService.openLoader();
        this.documentoService.update(documento).subscribe({
      next: (data: any) => {
        this.sharedService.closeLoader();
        let status: NbComponentStatus = 'success';
        this.sharedService.showToast(status, 'Sucesso', 'Operação realizada com sucesso!');
        this.listDocs();
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
    })
  }

}
