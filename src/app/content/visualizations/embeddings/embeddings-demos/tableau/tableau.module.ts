import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setEmbeddingsRoutes } from '../../embeddings-content';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { TableauBasicSharedModule } from './demos/tableau-demo-basic/tableau-demo-basic.shared';
import { TableauDemoBasicComponent } from './demos/tableau-demo-basic/tableau-demo-basic.component';

const routes: Routes = setEmbeddingsRoutes({
  overviewDemoComponent: TableauDemoBasicComponent,
  id: 'tableau',
});

@NgModule({
  imports: [
    TableauBasicSharedModule,
    CommonModule,
    // Docs
    ComponentDetailsModule,
    DocumentationToolsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class TableauModule {}
