import { SbMasterDataComponent } from './sbMasterData.component';
import { IndexComponent } from './components/index/index.component';
import { Page404Component } from '../error/components/page404/page404.component';

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
    Page404Component,
  ],
})
export class SbMasterDataModule {
}
