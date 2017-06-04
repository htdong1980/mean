import { Mje } from './mje.component';

import { routing } from './mje.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../theme/nga.module';
import { MjeComponentsModule } from './components';
// import { Mje01, Mje02, Mje11, Mje12 } from './components'; NO NEED TO IMPORT THESE COMPONENTS
import { Mje10Module } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    MjeComponentsModule,
    Mje10Module,
    routing,
  ],
  declarations: [
    Mje,
    // Mje01, Mje02, Mje11, Mje12,  NO NEED TO DECLARE THESE COMPONENTS AS THEY BELONG TO MjeComponentsModule
  ],
})
export class MjeModule {
}
