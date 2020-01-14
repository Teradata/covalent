import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setEmbeddingsRoutes } from '../../embeddings-content';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { MicrostrategyBasicSharedModule } from './demos/microstrategy-demo-basic/microstrategy-demo-basic.shared';
import { MicrostrategyDemoBasicComponent } from './demos/microstrategy-demo-basic/microstrategy-demo-basic.component';

const routes: Routes = setEmbeddingsRoutes({
  overviewDemoComponent: MicrostrategyDemoBasicComponent,
  id: 'microstrategy',
});

@NgModule({
  imports: [
    MicrostrategyBasicSharedModule,
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
export class MicrostrategyModule {}
