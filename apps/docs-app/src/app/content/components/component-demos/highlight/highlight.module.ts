import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { CovalentHighlightModule } from '@covalent/highlight';
import { setComponentRoutes } from '../../../../content/components/components';
import { HighLightDemoCssSharedModule } from './demos/highlight-demo-css/highlight-demo-css-shared';
import { HighlightDemoCssComponent } from './demos/highlight-demo-css/highlight-demo-css.component';
import { DocumentationToolsModule } from '../../../../documentation-tools';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: HighlightDemoCssComponent,
  id: 'highlight',
});

@NgModule({
  imports: [
    HighLightDemoCssSharedModule,
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
