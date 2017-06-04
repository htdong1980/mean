import { Mje10 } from './mje10.component';
// import { Mje01, Mje02, Mje11, Mje12 } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mje10,
    children: [
      // { path: '', component: Mje00 },
      // { path: 'Mje01', component: Mje01 },
      // { path: 'Mje02', component: Mje02 },
      // { path: 'Mje11', component: Mje11 },
      // { path: 'Mje12', component: Mje12 },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
