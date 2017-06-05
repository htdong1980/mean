import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Mje10 } from './mje10.component';
import { MjeNx } from './components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';
import { MjeComponentsModule } from '../mjeComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    MjeComponentsModule,
  ],
  declarations: [
    Mje10,
    MjeNx,
  ],
  providers: [
  ],
})
export class Mje10Module {
}
