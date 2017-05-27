import { routing } from './pageError.routing';
import { PageError } from './pageError.component';
import { Page404Component } from '../page404/index';
import { Page500Component } from '../page500/index';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    PageError,
    Page404Component,
    Page500Component,
  ],
  providers: [
  ],
})
export class PageErrorModule {
}
