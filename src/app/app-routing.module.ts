import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { AuthGuard } from './pages/customlogin/auth.guard';
import { AuthLoggedIn } from './pages/customlogin/authLoggedIn.guard';

export const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    canActivate: [AuthLoggedIn],
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
