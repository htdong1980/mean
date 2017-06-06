import { Vdr01 } from './vdr01.component';
import { Vdr01Index, Vdr01Form } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    component: Vdr01,
    children: [
      { path: '', component: Vdr01Index },
      { path: ':id', component: Vdr01Form },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
