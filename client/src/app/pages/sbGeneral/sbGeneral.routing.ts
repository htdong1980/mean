import { News80Component } from '../_modules/news/components/news80/news80.component';
import { Sop80Component } from '../_modules/sop/components/sop80/sop80.component';
import { Cnt80Component } from '../_modules/cnt/components/cnt80/cnt80.component';
// import { Page404Component } from '../error/components/page404/page404.component';
import { IndexComponent } from './components/index/index.component';
import { SbGeneralComponent } from './sbGeneral.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SbGeneralComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'news80', component: News80Component },
      { path: 'sop80', component: Sop80Component },
      { path: 'cnt80', component: Cnt80Component },
      { path: '**', component: IndexComponent },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
