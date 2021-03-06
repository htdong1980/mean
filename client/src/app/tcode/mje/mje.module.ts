import { Mje00Module } from './components/mje00/mje00.module';
import { Mje01Module } from './components/mje01/mje01.module';
import { Mje02Module } from './components/mje02/mje02.module';
import { Mje03Module } from './components/mje03/mje03.module';
import { Mje04Module } from './components/mje04/mje04.module';
import { Mje05Module } from './components/mje05/mje05.module';
import { Mje06Module } from './components/mje06/mje06.module';

import { Mje } from './mje.component';
import { routing } from './mje.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,

    Mje00Module,
    Mje01Module,
    Mje02Module,
    Mje03Module,
    Mje04Module,
    Mje05Module,
    Mje06Module,
  ],
  declarations: [
    Mje,
  ],
  providers: [
  ],
})
export class MjeModule {
}
