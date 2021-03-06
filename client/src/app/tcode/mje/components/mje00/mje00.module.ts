import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NewsService } from '../../../../core';
import { MjeService } from '../../../../core';
import { MjeList } from './mjeList/mjeList.component';
import { Mje00 } from './mje00.component';
// import { routing } from './mje00.routing';

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
    Ng2SmartTableModule,
    // routing,
  ],
  declarations: [
    Mje00,
    MjeList,
  ],
  providers: [
    NewsService,
    MjeService,
  ],
})
export class Mje00Module {
}
