import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { WordcloudDemoBasicComponent } from './demos/wordcloud-demo-basic/wordcloud-demo-basic.component';
import { WordcloudDemoSharedModule } from './demos/wordcloud-demo-basic/wordcloud-demo.shared';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: WordcloudDemoBasicComponent,
  id: 'wordcloud',
});

@NgModule({
  imports: [
    WordcloudDemoSharedModule,
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
export class WordcloudModule {}
