import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    children: [
      // {
      //   path: '',nn
      //   redirectTo: 'basic',
      //   pathMatch: 'full'
      // },
      {
        path: 'basic',
        loadComponent: () => import('./reactive/pages/basic/basic.component').then(c => c.BasicComponent)
      },
      {
        path: 'dynamic',
        loadComponent: () => import('./reactive/pages/dynamic/dynamic.component').then(c => c.DynamicComponent)
      },
      {
        path: 'switches',
        loadComponent: () => import('./reactive/pages/switches/switches.component').then(c => c.SwitchesComponent)
      },
      {
        path: '**',
        redirectTo: 'basic'
      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./auth/pages/register/register.component').then(c => c.RegisterComponent)
      },
      {
        path: '**',
        redirectTo: 'sign-up'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'reactive'
  }
];
