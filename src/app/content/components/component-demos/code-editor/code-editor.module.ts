import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { CovalentCodeEditorModule } from '@covalent/code-editor';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { CodeEditorDemoComponent } from './code-editor.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: CodeEditorDemoComponent,
  id: 'code-editor',
});

@NgModule({
  declarations: [CodeEditorDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    FormsModule,
    CovalentCodeEditorModule,
    ComponentDetailsModule,
    // Covalent
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class CodeEditorDemoModule {}
