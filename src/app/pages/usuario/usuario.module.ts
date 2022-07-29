import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { SharedModule } from '../../@shared/shared.module';
import { UsuarioRoutes } from './usuario.routing';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutes
  ],
  declarations: [UsuarioComponent, ListComponent]
})
export class UsuarioModule { }
