import { SbWorkflow } from './sbWorkflow.component';
import { Vdr20 } from '../../shared';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbWorkflow,
    children: [
      // { path: '', component: IndexComponent },
      { path: 'vdr20', component: Vdr20 },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
