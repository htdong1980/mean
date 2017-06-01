import { Mje00Component } from '../_modules/mje/components/mje00/mje00.component';
import { Mje01Component } from '../_modules/mje/components/mje01/mje01.component';
import { Mje02Component } from '../_modules/mje/components/mje02/mje02.component';
import { Mje11Component } from '../_modules/mje/components/mje11/mje11.component';
import { Mje12Component } from '../_modules/mje/components/mje12/mje12.component';
// import { Page404Component } from '../error/components/page404/page404.component';
import { SbTransactionComponent } from './sbTransaction.component';
import { IndexComponent } from './components/index/index.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './sbTransaction.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    SbTransactionComponent,
    IndexComponent,
    Mje00Component,
    Mje01Component,
    Mje02Component,
    Mje11Component,
    Mje12Component,
    // Page404Component,
  ],
})
export class SbTransactionModule {
}
