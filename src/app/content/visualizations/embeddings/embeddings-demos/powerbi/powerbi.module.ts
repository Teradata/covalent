import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setEmbeddingsRoutes, addPowerBIResolverToRoutes } from '../../embeddings-content';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { PowerBIBasicSharedModule } from './demos/powerbi-demo-basic/powerbi-demo-basic.shared';
import { PowerBIDemoBasicComponent } from './demos/powerbi-demo-basic/powerbi-demo-basic.component';
import { PowerBITokenResolver } from './powerbi-token.resolver';

const routes: Routes = setEmbeddingsRoutes({
  overviewDemoComponent: PowerBIDemoBasicComponent,
  id: 'powerbi',
});

addPowerBIResolverToRoutes(routes);

@NgModule({
  imports: [
    PowerBIBasicSharedModule,
    CommonModule,
    // Docs
    ComponentDetailsModule,
    DocumentationToolsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [PowerBITokenResolver],
})
export class PowerBIModule {}
