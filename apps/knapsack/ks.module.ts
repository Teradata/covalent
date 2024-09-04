// This module is imported into the ks angular app
// Use this to add any custom components or modules
// Note: Providers from the `BrowserModule` have already been loaded.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// import { BreadcrumbsDemoModule } from '../../docs-app/src/app/content/components/component-demos/breadcrumbs/demos/breadcrumbs-demo.module';
// import { FlavoredMarkdownDemoModule } from '../../docs-app/src/app/content/components/component-demos/flavored-markdown/demos/flavored-markdown-demo.module';
// import { HighlightDemoModule } from '../../docs-app/src/app/content/components/component-demos/highlight/demos/highlight-demo.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    CovalentUserProfileModule,
    CovalentBreadcrumbsModule,
    // BreadcrumbsDemoModule,
    // FlavoredMarkdownDemoModule,
    // HighlightDemoModule,
  ],
  exports: [CovalentUserProfileModule, CovalentBreadcrumbsModule],
})
export default class KsModule {}
