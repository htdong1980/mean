import { Vdr } from './vdr.component';
import { Vdr20, Vdr90, Vdr91 } from './components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { routing } from './vdr.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Vdr,
    Vdr20,
    Vdr90,
    Vdr91,    
  ],
})
export class VdrModule {
}
