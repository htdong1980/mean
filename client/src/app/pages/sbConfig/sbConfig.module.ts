import { SbConfigComponent } from './sbConfig.component';
import { IndexComponent } from './components/index/index.component';
import { Page404Component } from '../error/components/page404/page404.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './sbConfig.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    SbConfigComponent,
    IndexComponent,
    Page404Component,
  ],
})
export class SbConfigModule {
}
