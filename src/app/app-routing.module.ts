import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/customlogin/customlogin.module').then(m => m.CustomloginModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/customlogin/customlogin.module').then(m => m.CustomloginModule),
      }
    ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
