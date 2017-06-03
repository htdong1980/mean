import { Mje } from './mje.component';
import { Mje00, Mje01, Mje02, Mje10, Mje11, Mje12 } from './components';
import { routing } from './mje.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Mje,
    Mje00,
    Mje01,
    Mje02,
    Mje10,
    Mje11,
    Mje12,
  ],
})
export class MjeModule {
}
