import { NgModule } from '@angular/core';
import { MarkdownNavigatorDemoBasicComponent } from './markdown-navigator-demo-basic.component';
import { TdMarkdownNavigatorComponent } from '@covalent/markdown-navigator';

@NgModule({
  declarations: [MarkdownNavigatorDemoBasicComponent],
  imports: [TdMarkdownNavigatorComponent],
  exports: [MarkdownNavigatorDemoBasicComponent],
})
export class MarkdownNavigatorBasicSharedModule {}
