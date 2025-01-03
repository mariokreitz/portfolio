import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivatPolicyComponent } from './pages/privat-policy/privat-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'policy',
    component: PrivatPolicyComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
];
