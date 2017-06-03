import { SbWorkflow } from './sbWorkflow.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './sbWorkflow.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SharedModule,
    routing,
  ],
  declarations: [
    SbWorkflow,
  ],
})
export class SbWorkflowModule {
}
