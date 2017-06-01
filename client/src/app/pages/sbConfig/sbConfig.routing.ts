import { SbConfigComponent } from './sbConfig.component';
import { Page404Component } from '../error/components/page404/page404.component';
import { IndexComponent } from './components/index/index.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbConfigComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
