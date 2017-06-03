import { Mje01, Mje02, Mje03, Mje06, Mje11, Mje12 } from './components';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Mje10 } from './mje10.component';

import { routing } from './mje10.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Mje10,
    Mje01,
    Mje02,
    Mje03,
    Mje06,
    Mje11,
    Mje12,
  ],
  providers: [
  ],
})
export class Mje10Module {
}
