import { SbMyRequest } from './sbMyRequest.component';
import { Draft, InProgress, Documenting, Finished } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbMyRequest,
    children: [
      // { path: '', component: IndexComponent },
      { path: 'draft', component: Draft },
      { path: 'inprogress', component: InProgress },
      { path: 'documenting', component: Documenting },
      { path: 'finished', component: Finished },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
