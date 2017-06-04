import { Sop } from './sop.component';
import { Sop80 } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Sop,
    children: [
      { path: 'sop80', component: Sop80 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
