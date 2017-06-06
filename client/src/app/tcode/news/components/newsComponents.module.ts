import { News01Module } from './news01';
import { News02 } from './news02';
import { News11 } from './news11';
import { News12 } from './news12';
// import { News01, News02, News11, News12 } from './index'; DO NOT WORK

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    News01Module,
  ],
  declarations: [
    News02,
    News11,
    News12,
  ],
})
export class NewsComponentsModule {
}
