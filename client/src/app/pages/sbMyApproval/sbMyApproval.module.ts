import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
// import { Page404Component } from '../error/components/page404/page404.component';
import { SbMyApprovalComponent } from './sbMyApproval.component';
import { IndexComponent } from './components/index/index.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './sbMyApproval.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    SbMyApprovalComponent,
    IndexComponent,
    InboxComponent,
    OutboxComponent,
    // Page404Component,
  ],
})
export class SbMyApprovalModule {
}
