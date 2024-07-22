// This module is imported into the ks angular app
// Use this to add any custom components or modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { CovalentSearchModule } from '@covalent/core/search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BreadcrumbsDemoModule } from '../../docs-app/src/app/content/components/component-demos/breadcrumbs/demos/breadcrumbs-demo.module';
import { FlavoredMarkdownDemoModule } from '../../docs-app/src/app/content/components/component-demos/flavored-markdown/demos/flavored-markdown-demo.module';
import { HighlightDemoModule } from '../../docs-app/src/app/content/components/component-demos/highlight/demos/highlight-demo.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    // CovalentUserProfileModule,
    CovalentSearchModule,
    MatButtonModule,
    MatCardModule,
    BreadcrumbsDemoModule,
    FlavoredMarkdownDemoModule,
    HighlightDemoModule,
  ],
  exports: [],
})
export class KsModule {}
