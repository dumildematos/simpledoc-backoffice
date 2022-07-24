import { Routes, RouterModule } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { CustomloginComponent } from './customlogin/customlogin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomloginComponent,
      },
      {
        path: 'login',
        component: CustomloginComponent,
      },
      // {
      //   path: 'register',
      //   component: NbRegisterComponent,
      // },
      // {
      //   path: 'logout',
      //   component: NbLogoutComponent,
      // },
      // {
      //   path: 'request-password',
      //   component: NbRequestPasswordComponent,
      // },
      // {
      //   path: 'reset-password',
      //   component: NbResetPasswordComponent,
      // },
    ],
  },
];

export const CustomloginRoutes = RouterModule.forChild(routes);
