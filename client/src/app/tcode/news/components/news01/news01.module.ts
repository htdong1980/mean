import { News01 } from './news01.component';
import { News01Index, News01Form } from './components';
import { routing } from './news01.routing';

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
    News01,
    News01Index, News01Form,
  ],
  providers: [
  ],
})
export class News01Module {
}
