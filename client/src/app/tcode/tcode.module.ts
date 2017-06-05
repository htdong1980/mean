import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgaModule } from '../theme/nga.module';

/*
import {
  // Shared Components (Not combined in any Module)
  // Ctm20, Ctm90, Ctm91,
  // Error404,
} from './modules';

const SHARED_COMPONENTS = [
  // Ctm20, Ctm90, Ctm91,
  // Error404,
];
*/

import {
  MjeModule,
} from './mje';

const SHARED_MODULES = [
  MjeModule,
];

@NgModule({
  imports: [
    NgaModule,
    ...SHARED_MODULES,
  ],
  declarations: [
    // ...SHARED_COMPONENTS,
  ],
  exports: [
    // ...SHARED_COMPONENTS,
  ],
})
export class TCodeModule {
  /*
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: SharedModule,
    };
  }
  */
}
