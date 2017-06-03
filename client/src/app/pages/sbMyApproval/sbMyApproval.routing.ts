import { SbMyApprovalComponent } from './sbMyApproval.component';
import { Inbox, Outbox } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbMyApprovalComponent,
    children: [
      // { path: '', component: IndexComponent },
      { path: 'inbox', component: Inbox },
      { path: 'outbox', component: Outbox },
      // { path: '**', component: Error404 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
