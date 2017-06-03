import { About } from './components';
import { SbGeneral } from './sbGeneral.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './sbGeneral.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    SharedModule,
    routing,
  ],
  declarations: [
    SbGeneral,
    About,    
  ],
})
export class SbGeneralModule {
}
