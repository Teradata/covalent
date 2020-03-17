import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { CovalentHighlightModule } from '@covalent/highlight';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { CodeEditorDemoBasicComponent } from './demos/code-editor-demo-basic/code-editor-demo-basic.component';
import { CodeEditorDemoBasicSharedModule } from './demos/code-editor-demo-basic/code-editor-demo-basic-shared';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: CodeEditorDemoBasicComponent,
  id: 'code-editor',
});

@NgModule({
  imports: [
    CodeEditorDemoBasicSharedModule,
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    // Covalent
    CovalentCodeEditorModule,
    CovalentHighlightModule,
    ComponentDetailsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class CodeEditorDemoModule {}
