import { Mje01 } from './mje01.component';
import { Mje01Index, Mje01Form } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    component: Mje01,
    children: [
      { path: '', component: Mje01Index },
      { path: ':id', component: Mje01Form },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
