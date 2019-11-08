import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownNavigatorDemoBasicComponent } from './markdown-navigator-demo-basic/markdown-navigator-demo-basic.component';
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
import { MarkdownNavigatorDemoComponent } from './markdown-navigator-demo.component';
import { MarkdownNavigatorDemoRoutingModule } from './markdown-navigator-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    MarkdownNavigatorDemoComponent,
    MarkdownNavigatorDemoBasicComponent
  ],
  imports: [
    DemoModule,
    MarkdownNavigatorDemoRoutingModule,
    /** Covalent Modules */
    CovalentMarkdownNavigatorModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class MarkdownNavigatorDemoModule {}
