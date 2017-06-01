import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { routing } from './cnt.routing';
import { CntComponent } from './cnt.component';
import { Cnt80Component } from './components/cnt80/cnt80.component';
import { Page404Component } from '../../error/components/page404/page404.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    CntComponent,
    Cnt80Component,
    Page404Component,
  ],
})
export class CntModule {
}
