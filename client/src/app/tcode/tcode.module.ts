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
import { NewsModule } from './news';
import { InboxModule } from './inbox';
import { OutboxModule } from './outbox';

import { DraftModule } from './draft';
import { InProgressModule } from './inProgress';
import { DocumentingModule } from './documenting';
import { FinishedModule } from './finished';

import { MjeModule } from './mje';
import { VdrModule } from './vdr';

const SHARED_MODULES = [
  NewsModule,
  InboxModule,
  OutboxModule,
  DraftModule,
  InProgressModule,
  DocumentingModule,
  FinishedModule,
  MjeModule,
  VdrModule,
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
