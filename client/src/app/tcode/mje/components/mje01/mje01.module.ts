import { Mje01 } from './mje01.component';
import { Mje01Index, Mje01Form } from './components';
import { routing } from './mje01.routing';

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
    Mje01,
    Mje01Index, Mje01Form,
  ],
  providers: [
  ],
})
export class Mje01Module {
}
