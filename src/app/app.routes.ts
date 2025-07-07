import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'manager/overview',
    pathMatch: 'full',
  },
  {
    path: 'manager',
    loadComponent: () => import('./manager/manager.page').then(m => m.ManagerPage),
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./overview/overview.page').then(m => m.OverviewPage)
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },


  
  {
    path: 'overview',
    loadComponent: () => import('./overview/overview.page').then(m => m.OverviewPage)
  },
];
