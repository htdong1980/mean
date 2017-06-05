import { Test } from '../shared/modules/test/test.component';
import { Mje10, Mje01, Mje02, Mje11, Mje12 } from '../tcode';
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
      { path: 'general', loadChildren: './sbGeneral/sbGeneral.module#SbGeneralModule' },
      { path: 'myapproval', loadChildren: './sbMyApproval/sbMyApproval.module#SbMyApprovalModule' },
      { path: 'myrequests', loadChildren: './sbMyRequest/sbMyRequest.module#SbMyRequestModule' },
      { path: 'workflow', loadChildren: './sbWorkflow/sbWorkflow.module#SbWorkflowModule' },
      { path: 'transaction', loadChildren: './sbTransaction/sbTransaction.module#SbTransactionModule' },

      { path: 'library/blank', loadChildren: './blank/blank.module#BlankModule' },
      { path: 'library/adminLTE', loadChildren: './adminLTE/adminLTE.module#AdminLTEModule' },

      { path: 'tcode',
        canActivateChild: [AuthTCodeGuard],
        children: [
          { path: 'test', component: Test },
          { path: 'mje10', component: Mje10 },
          { path: 'mje01', component: Mje01 },
          { path: 'mje02', component: Mje02 },
          { path: 'mje11', component: Mje11 },
          { path: 'mje12', component: Mje12 },
          { path: '**', component: Page404 },
        ],
      },
      { path: 'page500', component: Page500 },
      { path: '**', component: Page404 },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
