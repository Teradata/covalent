import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownDemoBasicComponent } from './markdown-demo-basic/markdown-demo-basic.component';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { MarkdownDemoComponent } from './markdown-demo.component';
import { MarkdownDemoRoutingModule } from './markdown-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MarkdownDemoAnchorJumpingComponent } from './markdown-demo-anchor-jumping/markdown-demo-anchor-jumping.component';
import { MarkdownDemoHostedUrlComponent } from './markdown-demo-hosted-url/markdown-demo-hosted-url.component';
import { MarkdownDemoYoutubeComponent } from './markdown-demo-youtube/markdown-demo-youtube.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MarkdownDemoComponent,
    MarkdownDemoBasicComponent,
    MarkdownDemoAnchorJumpingComponent,
    MarkdownDemoHostedUrlComponent,
    MarkdownDemoYoutubeComponent,
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
