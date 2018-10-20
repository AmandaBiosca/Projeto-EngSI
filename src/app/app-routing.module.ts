import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule'
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: 'Home',
    },
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        redirectTo: '',
        pathMatch: 'full'
      },
    ],
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
