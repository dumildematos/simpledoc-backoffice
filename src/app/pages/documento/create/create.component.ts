import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NbComponentStatus, NbDialogRef } from '@nebular/theme';

import { SharedService } from '../../../@shared/shared.service';
import { Categoria } from '../../categoria/model/categoria';
import { CategoriaService } from '../../categoria/service/categoria.service';
import { Documento } from '../model/documento';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() title: string;
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
  documento: Documento = {
    name: null,
    content: null,
    price: null,
    description: null,
    cover: null,
    categoryId: null,
  };
  categories: Categoria [];
  selectedFileName: string = null;

  constructor(protected ref: NbDialogRef<CreateComponent>, private sharedService: SharedService, private categoriaService: CategoriaService) {}

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    this.listarCategoria();
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
        name: this.documento.name,
        content: JSON.stringify(this.editor.getContents()),
        price: this.documento.price + '.00',
        description: this.documento.description,
        cover: this.documento.cover,
        categoryId: this.documento.categoryId,
      };
      this.ref.close(newDocumento);
    }else {
      let status: NbComponentStatus = 'warning';
      this.sharedService.showToast(status, 'Aviso', 'Por favor preencher todos os campos');
    }

  }

  onEditorCreated(quill) {
    this.editor = quill;
  }

  fileEvent(event) {
    this.documento.cover = event.target.files[0];
    const file = event.target.files[0];
    const reader = new FileReader();
    this.selectedFileName = file.name;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.documento.cover = String(reader.result);
    };
  }



}
