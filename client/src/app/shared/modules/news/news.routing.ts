import { Routes, RouterModule } from '@angular/router';

import { News } from './news.component';
import { News80 } from './components/news80/news80.component';

const routes: Routes = [
  {
    path: '',
    component: News,
    children: [
      { path: 'news80', component: News80 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
