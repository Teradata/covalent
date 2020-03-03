import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownDemoBasicComponent } from './markdown-demo-basic/markdown-demo-basic.component';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { MarkdownDemoComponent } from './markdown-demo.component';
import { MarkdownDemoRoutingModule } from './markdown-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MarkdownDemoLinksImagesComponent } from './markdown-demo-links-images/markdown-demo-links-images.component';
import { MarkdownDemoCodeBlocksComponent } from './markdown-demo-code-blocks/markdown-demo-code-blocks.component';
import { MarkdownDemoBlockquotesDividersComponent } from './markdown-demo-blockquotes-dividers/markdown-demo-blockquotes-dividers.component';
import { MarkdownDemoAnchorJumpingComponent } from './markdown-demo-anchor-jumping/markdown-demo-anchor-jumping.component';
import { MarkdownDemoHostedUrlComponent } from './markdown-demo-hosted-url/markdown-demo-hosted-url.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MarkdownDemoComponent,
    MarkdownDemoBasicComponent,
    MarkdownDemoLinksImagesComponent,
    MarkdownDemoCodeBlocksComponent,
    MarkdownDemoBlockquotesDividersComponent,
    MarkdownDemoAnchorJumpingComponent,
    MarkdownDemoHostedUrlComponent,
  ],
  imports: [
    DemoModule,
    MarkdownDemoRoutingModule,
    /** Covalent Modules */
    CovalentMarkdownModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class MarkdownDemoModule {}
