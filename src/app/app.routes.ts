import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/welcome-page/welcome-page').then((m) => m.WelcomePage),
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list-page/list-page').then((m) => m.ListPage),
  },
];
