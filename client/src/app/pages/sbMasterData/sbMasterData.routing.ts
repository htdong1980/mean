import { SbMasterDataComponent } from './sbMasterData.component';
import { IndexComponent } from './components/index/index.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbMasterDataComponent,
    children: [
      { path: '', component: IndexComponent },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
