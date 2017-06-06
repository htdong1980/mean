import { Vdr01 } from './vdr01.component';
import { Vdr01Index, Vdr01Form } from './components';
import { routing } from './vdr01.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Vdr01,
    Vdr01Index, Vdr01Form,
  ],
  providers: [
  ],
})
export class Vdr01Module {
}
