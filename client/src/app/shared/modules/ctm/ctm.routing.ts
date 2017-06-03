import { Ctm } from './ctm.component';
import { Ctm20, Ctm90, Ctm91 } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Ctm,
    children: [
      { path: '', component: Ctm20 },
      { path: 'Ctm20', component: Ctm20 },
      { path: 'Ctm90', component: Ctm90 },
      { path: 'Ctm91', component: Ctm91 },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
