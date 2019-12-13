import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownDemoBasicComponent } from './markdown-demo-basic/markdown-demo-basic.component';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { MarkdownDemoComponent } from './markdown-demo.component';
import { MarkdownDemoRoutingModule } from './markdown-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [MarkdownDemoComponent, MarkdownDemoBasicComponent],
  imports: [
    DemoModule,
    MarkdownDemoRoutingModule,
    /** Covalent Modules */
    CovalentMarkdownModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class MarkdownDemoModule {}
