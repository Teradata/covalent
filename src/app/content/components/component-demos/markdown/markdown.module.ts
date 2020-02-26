import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentMarkdownModule } from '@covalent/markdown';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { MarkdownDemoComponent } from './markdown.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: MarkdownDemoComponent,
  id: 'markdown-parser',
});

@NgModule({
  declarations: [MarkdownDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    ComponentDetailsModule,
    // Covalent
    CovalentMarkdownModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class MarkdownDemoModule {}
