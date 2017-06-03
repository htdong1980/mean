import { SbTransaction } from './sbTransaction.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './sbTransaction.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SharedModule,
    routing,
  ],
  declarations: [
    SbTransaction,
  ],
})
export class SbTransactionModule {
}
