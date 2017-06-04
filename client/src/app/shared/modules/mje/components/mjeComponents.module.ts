import { Mje01 } from './mje01';
import { Mje02 } from './mje02';
import { Mje11 } from './mje11';
import { Mje12 } from './mje12';
// import { Mje01, Mje02, Mje11, Mje12 } from './index'; DO NOT WORK

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
  ],
  declarations: [
    Mje01,
    Mje02,
    Mje11,
    Mje12,
  ],
})
export class MjeComponentsModule {
}
