import { Cnt } from './cnt.component';
import { Cnt80 } from './components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { routing } from './cnt.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Cnt,
    Cnt80,
  ],
})
export class CntModule {
}
