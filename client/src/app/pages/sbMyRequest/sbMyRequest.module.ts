import { SbMyRequestComponent } from './sbMyRequest.component';
import { IndexComponent } from './components/index/index.component';
import { DraftComponent } from './components/draft/draft.component';
import { InProgressComponent } from './components/inProgress/inProgress.component';
import { DocumentingComponent } from './components/documenting/documenting.component';
import { FinishedComponent } from './components/finished/finished.component';
// import { Page404Component } from '../error/components/page404/page404.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './sbMyRequest.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    SbMyRequestComponent,
    IndexComponent,
    DraftComponent,
    InProgressComponent,
    DocumentingComponent,
    FinishedComponent,
    // Page404Component,
  ],
})
export class SbMyRequestModule {
}
