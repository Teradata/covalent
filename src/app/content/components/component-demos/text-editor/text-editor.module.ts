import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { TextEditorDemoComponent } from './text-editor.component';
import { CovalentTextEditorModule } from '../../../../../platform/text-editor';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: TextEditorDemoComponent,
  id: 'text-editor',
});

@NgModule({
  declarations: [TextEditorDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ComponentDetailsModule,
    // Covalent
    CovalentTextEditorModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class TextEditorDemoModule {}
