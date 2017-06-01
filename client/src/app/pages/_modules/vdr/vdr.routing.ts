import { VdrComponent } from './vdr.component';
import { Vdr20Component } from './components/vdr20/vdr20.component';
// import { Page404Component } from '../../error/components/page404/page404.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VdrComponent,
    children: [
      { path: 'vdr20', component: Vdr20Component },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
