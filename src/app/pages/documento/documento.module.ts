import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoComponent } from './documento.component';
import { DocumentoRoutes } from './documento.routing';
import { SharedModule } from '../../@shared/shared.module';
import { ListComponent } from './list/list.component';
import { KittenCardComponent } from './list/kitten-card/kitten-card.component';
import { NewsService } from '../layout/news.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DocumentoRoutes
  ],
  declarations: [DocumentoComponent, ListComponent, KittenCardComponent],
  providers: [NewsService]
})
export class DocumentoModule { }
