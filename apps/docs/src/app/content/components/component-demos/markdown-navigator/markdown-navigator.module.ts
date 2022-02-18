import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { setComponentRoutes } from '../../../../content/components/components';
import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownNavigatorBasicSharedModule } from './demos/markdown-navigator-demo-basic/markdown-navigator-demo-basic-shared';
import { MarkdownNavigatorDemoBasicComponent } from './demos/markdown-navigator-demo-basic/markdown-navigator-demo-basic.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: MarkdownNavigatorDemoBasicComponent,
  id: 'markdown-navigator',
});

@NgModule({
  imports: [
    // Docs
    // Routes
    RouterModule.forChild(routes),

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DocumentationToolsModule,
    ComponentDetailsModule,

    // Material
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatDividerModule,
    MatTabsModule,

    // Covalent
    CovalentHighlightModule,
    CovalentCodeEditorModule,

    MarkdownNavigatorBasicSharedModule,
  ],
  exports: [],
  providers: [],
})
export class MarkdownNavigatorDemoModule {}
