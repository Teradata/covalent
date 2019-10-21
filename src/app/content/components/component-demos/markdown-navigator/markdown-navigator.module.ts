import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { setComponentRoutes } from 'app/content/components/components';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';

import { MarkdownNavigatorDemoComponent } from './markdown-navigator.component';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: MarkdownNavigatorDemoComponent,
  id: 'markdown-navigator',
});

@NgModule({
  declarations: [MarkdownNavigatorDemoComponent],
  imports: [
    CommonModule,
    DocumentationToolsModule,
    // Material
    MatCardModule,
    MatRadioModule,
    MatDividerModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentDetailsModule,
    // Covalent
    CovalentHighlightModule,
    CovalentCodeEditorModule,
    CovalentMarkdownNavigatorModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class MarkdownNavigatorDemoModule {}
