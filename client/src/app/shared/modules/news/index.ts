// Single point to export component and module
export * from './news.component';
export * from './news.module';

// To support importation of shared components in a routing module where requires a link to,
// before that remember to import shared module in component module
export * from './components';
