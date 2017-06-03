import { SbMyRequest } from './sbMyRequest.component';
import { Draft, InProgress, Documenting, Finished } from './components';

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
    SbMyRequest,
    Draft,
    InProgress,
    Documenting,
    Finished,
  ],
})
export class SbMyRequestModule {
}
