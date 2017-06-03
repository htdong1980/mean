import { SbGeneral } from './sbGeneral.component';
import { About } from './components';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SbGeneral,
    children: [
      { path: 'about', component: About },
      { path: 'news80', loadChildren: 'app/shared/modules/news/news.module#NewsModule' },
      { path: 'sop80', loadChildren: 'app/shared/modules/sop/sop.module#SopModule' },
      { path: 'cnt80', loadChildren: 'app/shared/modules/cnt/cnt.module#CntModule' },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
