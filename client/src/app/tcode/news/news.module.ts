import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { NewsComponentsModule } from './components';
import { News10Module } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    NewsComponentsModule,
    News10Module,
  ],
  declarations: [
  ],
})
export class NewsModule {
}
