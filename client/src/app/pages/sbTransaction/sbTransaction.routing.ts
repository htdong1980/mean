import { SbTransaction } from './sbTransaction.component';
import { Mje00, Mje01, Mje02, Mje10, Mje11, Mje12 } from '../../shared';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbTransaction,
    children: [
      // { path: '', component: IndexComponent },
      { path: 'mje00', component: Mje00 },
      { path: 'mje01', component: Mje01 },
      { path: 'mje02', component: Mje02 },
      { path: 'mje10', component: Mje10 },
      { path: 'mje11', component: Mje11 },
      { path: 'mje12', component: Mje12 },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
