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
  MarkdownNavigatorDemoFooterGlobalExampleComponent,
  MarkdownNavigatorDemoFooterItemExampleComponent,
} from './markdown-navigator-demo-footer/markdown-navigator-demo-footer.component';
import { MatListModule } from '@angular/material/list';
import { MarkdownNavigatorDemoChildrenUrlComponent } from './markdown-navigator-demo-children-url/markdown-navigator-demo-children-url.component';
import { MarkdownNavigatorDemoButtonClickedComponent } from './markdown-navigator-demo-button-clicked/markdown-navigator-demo-button-clicked.component';
import { MarkdownNavigatorDemoServiceButtonClickedComponent } from './markdown-navigator-demo-service-button-clicked/markdown-navigator-demo-service-button-clicked.component';
import { MarkdownNavigatorDemoDirectiveComponent } from './markdown-navigator-demo-directive/markdown-navigator-demo-directive.component';
import { MarkdownNavigatorDemoServiceComponent } from './markdown-navigator-demo-service/markdown-navigator-demo-service.component';
import { MarkdownNavigatorDemoStartAtComponent } from './markdown-navigator-demo-start-at/markdown-navigator-demo-start-at.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MarkdownNavigatorDemoComponent,
    MarkdownNavigatorDemoBasicComponent,
    MarkdownNavigatorDemoFooterComponent,
    MarkdownNavigatorDemoFooterGlobalExampleComponent,
    MarkdownNavigatorDemoFooterItemExampleComponent,
    MarkdownNavigatorDemoServiceButtonClickedComponent,
    MarkdownNavigatorDemoChildrenUrlComponent,
    MarkdownNavigatorDemoButtonClickedComponent,
    MarkdownNavigatorDemoDirectiveComponent,
    MarkdownNavigatorDemoServiceComponent,
    MarkdownNavigatorDemoStartAtComponent,
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
    MatButtonToggleModule,
    FormsModule,
  ],
})
export class MarkdownNavigatorDemoModule {}
