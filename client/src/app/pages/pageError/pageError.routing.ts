import { Routes, RouterModule } from '@angular/router';
import { PageError } from './pageError.component';
import { Page404Component } from '../page404/index';
import { Page500Component } from '../page500/index';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: PageError,
    children: [
      { path: 'page404', component: Page404Component },
      { path: 'page500', component: Page500Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
