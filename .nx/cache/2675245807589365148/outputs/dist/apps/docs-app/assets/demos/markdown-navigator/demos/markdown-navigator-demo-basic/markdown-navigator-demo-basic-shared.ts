import { NgModule } from '@angular/core';
import { MarkdownNavigatorDemoBasicComponent } from './markdown-navigator-demo-basic.component';
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';

@NgModule({
  declarations: [MarkdownNavigatorDemoBasicComponent],
  imports: [CovalentMarkdownNavigatorModule],
  exports: [MarkdownNavigatorDemoBasicComponent],
})
export class MarkdownNavigatorBasicSharedModule {}
