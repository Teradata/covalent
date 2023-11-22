import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { WordcloudDemoBasicComponent } from './wordcloud-demo-basic.component';
import { CovalentWordcloudEchartsModule } from '@covalent/echarts/wordcloud';

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
