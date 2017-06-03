import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";

import { Inbox, Outbox } from './components';
import { SbMyApprovalComponent } from './sbMyApproval.component';

import { InboxService } from './components/inbox/inbox.service';

import { HttpModule } from "@angular/http";
import { DataFilterPipe } from './components/outbox/data-filter.pipe';
import { DataTablesService } from './components/outbox/dataTables.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './sbMyApproval.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SharedModule,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    routing,
  ],
  declarations: [
    SbMyApprovalComponent,
    Inbox,
    Outbox,
    DataFilterPipe,
  ],
  providers: [
    InboxService,
    DataTablesService,
  ]
})
export class SbMyApprovalModule {
}
