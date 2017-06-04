import { Mje } from './mje.component';
import { Mje01, Mje02, Mje10, Mje11, Mje12 } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mje,
    children: [
      { path: 'Mje01', component: Mje01 },
      { path: 'Mje02', component: Mje02 },

      { path: 'Mje10', component: Mje10 },

      { path: 'Mje11', component: Mje11 },
      { path: 'Mje12', component: Mje12 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
