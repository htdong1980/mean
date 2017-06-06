import { News01 } from './news01.component';
import { News01Index, News01Form } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    component: News01,
    children: [
      { path: '', component: News01Index },
      { path: ':id', component: News01Form },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
