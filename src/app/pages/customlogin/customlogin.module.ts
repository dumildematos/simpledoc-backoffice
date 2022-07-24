import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../@shared/shared.module';

import { CustomloginRoutes } from './customlogin.routing';
import { CustomloginComponent } from './customlogin/customlogin.component';



@NgModule({
  declarations: [
    CustomloginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomloginRoutes
  ]
})
export class CustomloginModule { }
