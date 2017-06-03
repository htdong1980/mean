import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgaModule } from '../theme/nga.module';

import {
  // Shared Components (Not combined in any Module)
  // Ctm20, Ctm90, Ctm91,
  // Error404,
} from './modules';

const SHARED_COMPONENTS = [
  // Ctm20, Ctm90, Ctm91,
  // Error404,
];

import {
  NewsModule,
  SopModule,
  CtmModule,
  VdrModule,
  MjeModule,
} from './modules';

const SHARED_MODULES = [
  NewsModule,
  SopModule,
  CtmModule,
  VdrModule,
  MjeModule,
];

@NgModule({
  imports: [
    NgaModule,
    ...SHARED_MODULES,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  exports: [
    ...SHARED_COMPONENTS,
  ],
})
export class SharedModule {
  /*
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: SharedModule,
    };
  }
  */
}
