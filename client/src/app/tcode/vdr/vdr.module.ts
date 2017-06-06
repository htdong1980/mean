import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { VdrComponentsModule } from './components';
import { Vdr10Module } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    VdrComponentsModule,
    Vdr10Module,
  ],
  declarations: [
  ],
})
export class VdrModule {
}
