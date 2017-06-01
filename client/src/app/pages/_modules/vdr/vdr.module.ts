import { VdrComponent } from './vdr.component';
import { Vdr20Component } from './components/vdr20/vdr20.component';
// import { Page404Component } from '../../error/components/page404/page404.component';

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
    VdrComponent,
    Vdr20Component,
    // Page404Component,
  ],
})
export class SopModule {
}
