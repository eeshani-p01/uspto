import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CheckRequestStatusComponent,
  ConnectDataComponent,
  HomeComponent,
  RequestAccessComponent,
  SystemStatusComponent
} from './modules';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'connect',
    component: ConnectDataComponent,
  },
  {
    path: 'request-access',
    component: RequestAccessComponent,
  },
  {
    path: 'check-status',
    component: CheckRequestStatusComponent,
  },
  {
    path: 'system-status',
    component: SystemStatusComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
