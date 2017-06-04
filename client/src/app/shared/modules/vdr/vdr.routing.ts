import { Vdr } from './vdr.component';
import { Vdr20, Vdr90, Vdr91 } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Vdr,
    children: [
      { path: 'vdr20', component: Vdr20 },
      { path: 'vdr90', component: Vdr90 },
      { path: 'vdr91', component: Vdr91 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
