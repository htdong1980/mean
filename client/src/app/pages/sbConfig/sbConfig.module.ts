import { SbConfigComponent } from './sbConfig.component';
import { IndexComponent } from './components/index/index.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './sbConfig.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SharedModule,
    routing,
  ],
  declarations: [
    SbConfigComponent,
    IndexComponent,
  ],
})
export class SbConfigModule {
}
