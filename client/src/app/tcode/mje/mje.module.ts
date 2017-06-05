import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { MjeComponentsModule } from './components';
import { Mje10Module } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    MjeComponentsModule,
    Mje10Module,
  ],
  declarations: [
  ],
})
export class MjeModule {
}
