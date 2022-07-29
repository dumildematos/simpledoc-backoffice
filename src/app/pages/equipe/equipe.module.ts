import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeComponent } from './equipe.component';
import { SharedModule } from '../../@shared/shared.module';
import { EquipeRoutes } from './equipe.routing';
import { ItemComponent } from './list/item/item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EquipeRoutes
  ],
  declarations: [EquipeComponent, ListComponent , ItemComponent],
})
export class EquipeModule { }
