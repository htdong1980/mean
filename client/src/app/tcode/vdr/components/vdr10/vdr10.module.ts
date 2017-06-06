import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Vdr10 } from './vdr10.component';
import { VdrNx } from './components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';
import { VdrComponentsModule } from '../vdrComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    VdrComponentsModule,
  ],
  declarations: [
    Vdr10,
    VdrNx,
  ],
  providers: [
  ],
})
export class Vdr10Module {
}
