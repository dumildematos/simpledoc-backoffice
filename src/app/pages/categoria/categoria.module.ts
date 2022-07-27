import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../@shared/shared.module';

import { CategoriaRoutes } from './categoria.routing';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRoutes
  ],
  declarations: [ListComponent]
})
export class CategoriaModule { }
