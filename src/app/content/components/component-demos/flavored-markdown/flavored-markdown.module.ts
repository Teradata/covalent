import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { CovalentHighlightModule } from '@covalent/highlight';
import { setComponentRoutes } from 'app/content/components/components';
import { FlavoredMarkdownDemoComponent } from './flavored-markdown.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: FlavoredMarkdownDemoComponent,
  id: 'flavored-markdown',
});

@NgModule({
  declarations: [FlavoredMarkdownDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    ComponentDetailsModule,
    // Covalent
    CovalentFlavoredMarkdownModule,
    CovalentHighlightModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class FlavoredMarkdownDemoModule {}
