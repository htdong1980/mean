import { Vdr01Module } from './vdr01';
import { Vdr02 } from './vdr02';
import { Vdr11 } from './vdr11';
import { Vdr12 } from './vdr12';
import { Vdr20 } from './vdr20';
// import { Vdr01, Vdr02, Vdr11, Vdr12 } from './index'; DO NOT WORK

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Vdr01Module,
  ],
  declarations: [
    Vdr02,
    Vdr11,
    Vdr12,
    Vdr20,
  ],
})
export class VdrComponentsModule {
}
