import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: 'manager/overview',
    pathMatch: 'full',
  },
  {
    path: 'manager',
    loadComponent: () =>
      import('./manager/manager.page').then((m) => m.ManagerPage),
    children: [
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/overview/overview.page').then((m) => m.OverviewPage),
      },
    ],
  },

  {
    path: 'overview',
    loadComponent: () =>
      import('./pages/overview/overview.page').then((m) => m.OverviewPage),
  },  {
    path: 'access-and-security',
    loadComponent: () => import('./pages/access-and-security/access-and-security.page').then( m => m.AccessAndSecurityPage)
  },

];
