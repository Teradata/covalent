import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownNavigatorDemoBasicComponent } from './markdown-navigator-demo-basic/markdown-navigator-demo-basic.component';
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
import { MarkdownNavigatorDemoComponent } from './markdown-navigator-demo.component';
import { MarkdownNavigatorDemoRoutingModule } from './markdown-navigator-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatButtonModule } from '@angular/material/button';
import {
  MarkdownNavigatorDemoFooterComponent,
  MarkdownNavigatorDemoFooterExampleAComponent,
  MarkdownNavigatorDemoFooterExampleBComponent,
} from './markdown-navigator-demo-footer/markdown-navigator-demo-footer.component';
import { MatListModule } from '@angular/material/list';
import { MarkdownNavigatorDemoEventsComponent } from './markdown-navigator-demo-events/markdown-navigator-demo-events.component';
import { MarkdownNavigatorDemoChildrenUrlComponent } from './markdown-navigator-demo-children-url/markdown-navigator-demo-children-url.component';

@NgModule({
  declarations: [
    MarkdownNavigatorDemoComponent,
    MarkdownNavigatorDemoBasicComponent,
    MarkdownNavigatorDemoFooterComponent,
    MarkdownNavigatorDemoFooterExampleAComponent,
    MarkdownNavigatorDemoFooterExampleBComponent,
    MarkdownNavigatorDemoEventsComponent,
    MarkdownNavigatorDemoChildrenUrlComponent,
  ],
  imports: [
    DemoModule,
    MarkdownNavigatorDemoRoutingModule,
    /** Covalent Modules */
    CovalentMarkdownNavigatorModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class MarkdownNavigatorDemoModule {}
