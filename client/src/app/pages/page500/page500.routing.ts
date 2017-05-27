import { Routes, RouterModule } from '@angular/router';

import { Page500Component } from './page500.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Page500Component,
    children: [
    //   { path: 'blankchild', component: BlankchildComponent },
    ],
  }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
