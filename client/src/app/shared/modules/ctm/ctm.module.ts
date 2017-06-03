import { Ctm } from './ctm.component';
import { Ctm20, Ctm90, Ctm91 } from './components';
import { routing } from './ctm.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Ctm,
    Ctm20,
    Ctm90,
    Ctm91,
  ],
})
export class CtmModule {
}
