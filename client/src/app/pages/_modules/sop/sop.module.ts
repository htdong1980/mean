import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { routing } from './sop.routing';
import { SopComponent } from './sop.component';
import { Sop80Component } from './components/sop80/sop80.component';
import { Page404Component } from '../../error/components/page404/page404.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    SopComponent,
    Sop80Component,
    Page404Component,
  ],
})
export class SopModule {
}
