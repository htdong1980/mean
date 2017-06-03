import { Page404 } from './error/page404';
// import { NgcModule } from '../components/ngc.module';
import { AppTranslationModule } from '../app.translation.module';
import { AuthenticationService, UserService } from './_services';
import { AuthGuard } from './_guards';
import { Pages } from './pages.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../theme/nga.module';
import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    // NgcModule,
    routing,
  ],
  declarations: [
    Pages,
    Page404,
  ],
  providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
    ],
})
export class PagesModule {
}
