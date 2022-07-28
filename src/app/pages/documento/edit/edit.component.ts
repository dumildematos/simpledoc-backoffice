import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NbComponentStatus, NbDialogRef } from '@nebular/theme';
import Quill from 'quill';

import { SharedService } from '../../../@shared/shared.service';
import { Categoria } from '../../categoria/model/categoria';
import { CategoriaService } from '../../categoria/service/categoria.service';
import { Documento, DocumentoAction, DocumentoDetail } from '../model/documento';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() documentoAction: DocumentoAction;
  @ViewChild('editor') editor: any;

  options = {
    formula: true,
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['formula'],
      ['image', 'code-block']
    ]
  };

  quill: any;
  documento: Documento;
  categories: Categoria [];

  constructor(protected ref: NbDialogRef<EditComponent>, private sharedService: SharedService, private categoriaService: CategoriaService) {}

  ngOnInit() {

    this.documento = {
      name: this.documentoAction.documento.name,
      content: JSON.parse(this.documentoAction.documento.content),
      price: this.documentoAction.documento.price.split('.')[0],
      description: this.documentoAction.documento.description,
      cover: this.documentoAction.documento.cover,
      categoryId: this.documentoAction.documento.category[0]?.id,
    }


    this.listarCategoria();
  }

  ngAfterViewInit(): void {

  }

  dismiss() {
    this.ref.close();
  }

  listarCategoria(): void {
      this.sharedService.openLoader();
      this.categoriaService.list(0, 99999).subscribe({
        next: (resp: any) => {
          this.sharedService.closeLoader();
          this.categories = resp.content;
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


  submit(): void {
    if(this.editor.container.innerText != "\n" && this.documento.name && (this.documento.price && Number(this.documento.price) >= 0) && this.documento.description && (this.documento.categoryId && this.documento.categoryId != 0 )) {
      let newDocumento: Documento = {
        id: this.documentoAction.documento.id,
        name: this.documento.name,
        content: JSON.stringify(this.editor.getContents()),
        price: this.documento.price + '.00',
        description: this.documento.description,
        cover: this.documento.description,
        categoryId: this.documento.categoryId
      };
      this.ref.close(newDocumento);
    }else {
      let status: NbComponentStatus = 'warning';
      this.sharedService.showToast(status, 'Aviso', 'Por favor preencher todos os campos');
    }

  }

  onEditorChange(event: any): void {
    console.log(event)
  }

  onEditorCreated(quill) {
    quill.updateContents(JSON.parse(this.documentoAction.documento.content));
    this.editor = quill;
  }

}
