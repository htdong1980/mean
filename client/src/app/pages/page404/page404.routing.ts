import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from './page404.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Page404Component,
    children: [
    //   { path: 'blankchild', component: BlankchildComponent },
    ],
  }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
