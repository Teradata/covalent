import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDemoBasicComponent } from './highlight-demo-basic/highlight-demo-basic.component';
import { CovalentHighlightModule } from '@covalent/highlight';
import { HighlightDemoComponent } from './highlight-demo.component';
import { HighlightDemoRoutingModule } from './highlight-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [HighlightDemoComponent, HighlightDemoBasicComponent],
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
