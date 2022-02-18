import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDemoHtmlComponent } from './highlight-demo-html/highlight-demo-html.component';
import { HighlightDemoTsComponent } from './highlight-demo-ts/highlight-demo-ts.component';
import { CovalentHighlightModule } from '@covalent/highlight';
import { HighlightDemoComponent } from './highlight-demo.component';
import { HighlightDemoRoutingModule } from './highlight-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { HighLightDemoCssSharedModule } from './highlight-demo-css/highlight-demo-css-shared';
import { HighlightDemoCopyCodeComponent } from './highlight-demo-copy-code/highlight-demo-copy-code.component';

@NgModule({
  declarations: [
    HighlightDemoComponent,
    HighlightDemoHtmlComponent,
    HighlightDemoTsComponent,
    HighlightDemoCopyCodeComponent,
  ],
  imports: [
    HighLightDemoCssSharedModule,
    DemoModule,
    HighlightDemoRoutingModule,
    /** Covalent Modules */
    CovalentHighlightModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class HighlightDemoModule {}
