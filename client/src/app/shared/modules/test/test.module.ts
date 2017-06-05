import { Test } from './test.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
  ],
  declarations: [
    Test,
  ],
})
export class TestModule {
}
