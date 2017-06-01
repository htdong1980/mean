import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
// import { Page404Component } from '../error/components/page404/page404.component';
import { SbMyApprovalComponent } from './sbMyApproval.component';
import { IndexComponent } from './components/index/index.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbMyApprovalComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'outbox', component: OutboxComponent },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
