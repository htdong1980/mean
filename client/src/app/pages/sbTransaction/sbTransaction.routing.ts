import { Mje00Component } from '../_modules/mje/components/mje00/mje00.component';
import { Mje01Component } from '../_modules/mje/components/mje01/mje01.component';
import { Mje02Component } from '../_modules/mje/components/mje02/mje02.component';
import { Mje11Component } from '../_modules/mje/components/mje11/mje11.component';
import { Mje12Component } from '../_modules/mje/components/mje12/mje12.component';
// import { Page404Component } from '../error/components/page404/page404.component';
import { SbTransactionComponent } from './sbTransaction.component';
import { IndexComponent } from './components/index/index.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbTransactionComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'mje00', component: Mje00Component },
      { path: 'mje01', component: Mje01Component },
      { path: 'mje02', component: Mje02Component },
      { path: 'mje11', component: Mje11Component },
      { path: 'mje12', component: Mje12Component },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
