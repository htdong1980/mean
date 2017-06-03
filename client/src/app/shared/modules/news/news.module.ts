import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { routing } from './news.routing';
import { NewsComponent } from './news.component';
import { News80Component } from './components';
// import { Page404Component } from '../../error/components/page404/page404.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    NewsComponent,
    News80Component,
    // Page404Component,
  ],
})
export class NewsModule {
}
