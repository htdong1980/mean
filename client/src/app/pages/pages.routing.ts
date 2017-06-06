import { Test } from '../shared/modules/test/test.component';
import { Mje10, Mje01, Mje02, Mje11, Mje12 } from '../tcode';
import { News10, News01, News02, News11, News12 } from '../tcode';
import { Vdr10, Vdr01, Vdr02, Vdr11, Vdr12, Vdr20 } from '../tcode';
import { Inbox, Outbox, Draft, InProgress, Documenting, Finished } from '../tcode';
import { Page404, Page500 } from './error';

import { AuthGuard } from '../core/guard';
import { AuthTCodeGuard } from '../core/guard';

import { Routes, RouterModule } from '@angular/router';

import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/pages/landingpage/landingpage.module#LandingPageModule',
  },
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'reset',
    loadChildren: 'app/pages/reset/reset.module#ResetModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'pages',
    component: Pages,
    canActivateChild: [AuthGuard], // Add by HTD
    children: [
      { path: '', redirectTo: 'library/blank', pathMatch: 'full' },

      // tcode based
      { path: 'workflow', loadChildren: './sbWorkflow/sbWorkflow.module#SbWorkflowModule' },

      { path: 'tcode',
        canActivateChild: [AuthTCodeGuard],
        children: [
          { path: 'test', component: Test },

          // My Approval and My Requests
          { path: '',
            children: [
              { path: 'inbox', component: Inbox },
              { path: 'outbox', component: Outbox },
              { path: 'draft', component: Draft },
              { path: 'inprogress', component: InProgress },
              { path: 'documenting', component: Documenting },
              { path: 'finished', component: Finished },
            ],
          },

          // News
          { path: '',
            children: [
              { path: 'news10', component: News10 },
              { path: 'news01', loadChildren: '../tcode/news/components/news01/news01.module#News01Module' },
              { path: 'news02', component: News02 },
              { path: 'news11', component: News11 },
              { path: 'news12', component: News12 },
            ],
          },

          // MJE
          { path: '',
            children: [
              { path: 'mje10', component: Mje10 },
              { path: 'mje01', loadChildren: '../tcode/mje/components/mje01/mje01.module#Mje01Module' },
              { path: 'mje02', component: Mje02 },
              { path: 'mje11', component: Mje11 },
              { path: 'mje12', component: Mje12 },
            ],
          },

          // VDR
          { path: '',
            children: [
              { path: 'vdr10', component: Vdr10 },
              { path: 'vdr01', loadChildren: '../tcode/vdr/components/vdr01/vdr01.module#Vdr01Module' },
              { path: 'vdr02', component: Vdr02 },
              { path: 'vdr11', component: Vdr11 },
              { path: 'vdr12', component: Vdr12 },
              { path: 'vdr20', component: Vdr20 },
            ],
          },

          { path: '**', component: Page404 },
        ],
      },

      { path: 'library/blank', loadChildren: './blank/blank.module#BlankModule' },
      { path: 'library/adminLTE', loadChildren: './adminLTE/adminLTE.module#AdminLTEModule' },
      { path: 'page500', component: Page500 },
      { path: '**', component: Page404 },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
