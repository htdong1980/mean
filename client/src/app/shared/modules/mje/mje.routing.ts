import { Mje } from './mje.component';
import { Mje00, Mje01, Mje02, Mje10, Mje11, Mje12 } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mje,
    children: [
      { path: '', component: Mje00 },
      { path: 'Mje00', component: Mje00 },
      { path: 'Mje01', component: Mje01 },
      { path: 'Mje02', component: Mje02 },
      { path: 'Mje10', component: Mje10 },
      { path: 'Mje11', component: Mje11 },
      { path: 'Mje12', component: Mje12 },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
