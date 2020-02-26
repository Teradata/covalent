import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentHighlightModule } from '@covalent/highlight';
import { setComponentRoutes } from 'app/content/components/components';
import { HighlightDemoComponent } from './highlight.component';
import { DocumentationToolsModule } from 'app/documentation-tools';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: HighlightDemoComponent,
  id: 'highlight',
});

@NgModule({
  declarations: [HighlightDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatCardModule,
    MatDividerModule,
    DocumentationToolsModule,
    ComponentDetailsModule,
    // Covalent
    CovalentHighlightModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class HighlightDemoModule {}
