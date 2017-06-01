import { Routes, RouterModule }  from '@angular/router';

import { CntComponent } from './cnt.component';
import { Cnt80Component } from './components/cnt80/cnt80.component';
import { Page404Component } from '../../error/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: CntComponent,
    children: [
      { path: 'cnt80', component: Cnt80Component },
      { path: '**', component: Page404Component },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
