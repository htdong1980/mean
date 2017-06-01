import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { News80Component } from './components/news80/news80.component';
import { Page404Component } from '../../error/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      { path: 'news80', component: News80Component },
      { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
