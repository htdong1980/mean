import { UserService } from './_services/index';
import { Page404, Page500 } from './error';

import { AuthGuard } from '../core/guard';        // Login Guard
import { AuthTCodeGuard } from '../core/guard';   // TCode Guard
import { AuthenticationService } from './_services/index';

import { TestModule } from '../shared/modules/test/test.module';
import { TCodeModule } from '../tcode';

import { AppTranslationModule } from '../app.translation.module';

// import { AuthenticationService, UserService } from '../core/services/index'; // Not work, why?
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
    TestModule,
    TCodeModule,
    routing,
  ],
  declarations: [
    Pages,
    Page404,
    Page500,
  ],
  providers: [
        AuthGuard,
        AuthTCodeGuard,
        AuthenticationService,
        UserService,
    ],
})
export class PagesModule {
}
