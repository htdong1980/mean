import { SbMasterDataComponent } from './sbMasterData.component';
import { IndexComponent } from './components/index/index.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './sbMasterData.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    SbMasterDataComponent,
    IndexComponent,
  ],
})
export class SbMasterDataModule {
}
