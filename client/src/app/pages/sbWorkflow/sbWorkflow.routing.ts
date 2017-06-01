import { SbWorkflowComponent } from './sbWorkflow.component';
import { IndexComponent } from './components/index/index.component';
import { Vdr20Component } from '../_modules/vdr/components/vdr20/vdr20.component'
// import { Page404Component } from '../error/components/page404/page404.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbWorkflowComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'vdr20', component: Vdr20Component },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
