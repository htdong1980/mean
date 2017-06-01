import { IndexComponent } from './components/index/index.component';
import { News80Component } from '../_modules/news/components/news80/news80.component';
import { Sop80Component } from '../_modules/sop/components/sop80/sop80.component';
import { Cnt80Component } from '../_modules/cnt/components/cnt80/cnt80.component';
// import { Page404Component } from '../error/components/page404/page404.component';
import { SbGeneralComponent } from './sbGeneral.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './sbGeneral.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    SbGeneralComponent,
    IndexComponent,
    News80Component,
    Sop80Component,
    Cnt80Component,
    // Page404Component,
  ],
})
export class SbGeneralModule {
}
