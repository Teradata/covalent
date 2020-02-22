import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDemoCssComponent } from './highlight-demo-css/highlight-demo-css.component';
import { HighlightDemoHtmlComponent } from './highlight-demo-html/highlight-demo-html.component';
import { HighlightDemoTsComponent } from './highlight-demo-ts/highlight-demo-ts.component';
import { CovalentHighlightModule } from '@covalent/highlight';
import { HighlightDemoComponent } from './highlight-demo.component';
import { HighlightDemoRoutingModule } from './highlight-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    HighlightDemoComponent,
    HighlightDemoCssComponent,
    HighlightDemoHtmlComponent,
    HighlightDemoTsComponent,
  ],
  imports: [
    DemoModule,
    HighlightDemoRoutingModule,
    /** Covalent Modules */
    CovalentHighlightModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class HighlightDemoModule {}
