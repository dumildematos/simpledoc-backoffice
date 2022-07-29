import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: ListComponent }
];

export const UsuarioRoutes = RouterModule.forChild(routes);
