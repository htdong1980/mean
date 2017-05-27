import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { Pages } from './pages.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages],
  providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
    ],
})
export class PagesModule {
}
