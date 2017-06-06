import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { News10 } from './news10.component';
import { NewsNx } from './components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';
import { NewsComponentsModule } from '../newsComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    NewsComponentsModule,
  ],
  declarations: [
    News10,
    NewsNx,
  ],
  providers: [
  ],
})
export class News10Module {
}
