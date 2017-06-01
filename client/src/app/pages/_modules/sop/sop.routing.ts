import { Routes, RouterModule } from '@angular/router';

import { SopComponent } from './sop.component';
import { Sop80Component } from './components/sop80/sop80.component';
import { Page404Component } from '../../error/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: SopComponent,
    children: [
      { path: 'sop80', component: Sop80Component },
      { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
