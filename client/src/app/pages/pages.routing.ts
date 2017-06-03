import { AuthGuard } from './_guards/index'; // Add by HTD

import { Routes, RouterModule } from '@angular/router';
import { Page404 } from './error/page404';
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
    path: 'page404',
    loadChildren: 'app/pages/page404/page404.module#Page404Module',
  },
  {
    path: 'page500',
    loadChildren: 'app/pages/page500/page500.module#Page500Module',
  },
  {
    path: 'pages',
    component: Pages,
    canActivateChild: [AuthGuard], // Add by HTD
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'general', loadChildren: './sbGeneral/sbGeneral.module#SbGeneralModule' },
      { path: 'myapproval', loadChildren: './sbMyApproval/sbMyApproval.module#SbMyApprovalModule' },
      { path: 'myrequests', loadChildren: './sbMyRequest/sbMyRequest.module#SbMyRequestModule' },
      { path: 'workflow', loadChildren: './sbWorkflow/sbWorkflow.module#SbWorkflowModule' },
      { path: 'transaction', loadChildren: './sbTransaction/sbTransaction.module#SbTransactionModule' },

      { path: 'main', loadChildren: './main/main.module#MainModule' },
      { path: 'blank', loadChildren: './blank/blank.module#BlankModule' },
      { path: 'adminLTE', loadChildren: './adminLTE/adminLTE.module#AdminLTEModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'page_error', loadChildren: './pageError/pageError.module#PageErrorModule' },
      { path: '**', component: Page404 },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
