import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '../../../../../../../platform/echarts/base';
import { CovalentTooltipEchartsModule } from '../../../../../../../platform/echarts/tooltip';
import { WordcloudDemoBasicComponent } from './wordcloud-demo-basic.component';
import { CovalentWordcloudEchartsModule } from '../../../../../../../platform/echarts/wordcloud';

@NgModule({
  declarations: [WordcloudDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentWordcloudEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
  ],
  exports: [WordcloudDemoBasicComponent],
})
export class WordcloudDemoSharedModule {}
