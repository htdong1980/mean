import { SbMyRequestComponent } from './sbMyRequest.component';
import { IndexComponent } from './components/index/index.component';
import { DraftComponent } from './components/draft/draft.component';
import { InProgressComponent } from './components/inProgress/inProgress.component';
import { DocumentingComponent } from './components/documenting/documenting.component';
import { FinishedComponent } from './components/finished/finished.component';
// import { Page404Component } from '../error/components/page404/page404.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SbMyRequestComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'draft', component: DraftComponent },
      { path: 'inprogress', component: InProgressComponent },
      { path: 'documenting', component: DocumentingComponent },
      { path: 'finished', component: FinishedComponent },
      // { path: '**', component: Page404Component },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
