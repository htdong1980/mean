import { Mje } from './mje.component';
import { Mje00 } from './components/mje00';
import { Mje01 } from './components/mje01';
import { Mje02 } from './components/mje02';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mje,
    children: [
      { path: '', component: Mje00 },           // Management
      { path: 'mje00', component: Mje00 },      // Management
      { path: 'mje01', component: Mje01 },      // Create
      { path: 'mje02', component: Mje02 },      // View Lead
      { path: 'mje02/:id', component: Mje02 },  // View Form
    ],
  },
];

export const routing = RouterModule.forChild(routes);
