import { Cnt } from './cnt.component';
import { Cnt80 } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Cnt,
    children: [
      { path: '', component: Cnt80 },
      { path: 'cnt80', component: Cnt80 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
