import { CntComponent } from './cnt.component';
import { Cnt80Component } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CntComponent,
    children: [
      { path: '', component: Cnt80Component },
      { path: 'cnt80', component: Cnt80Component },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
