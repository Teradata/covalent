import { NgModule } from '@angular/core';
import { TdMarkdownNavigatorComponent } from './markdown-navigator.component';
import { TdMarkdownNavigatorWindowComponent } from './markdown-navigator-window/markdown-navigator-window.component';
import { TdMarkdownNavigatorWindowDirective } from './markdown-navigator-window-directive/markdown-navigator-window.directive';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [
    TdMarkdownNavigatorComponent,
    TdMarkdownNavigatorWindowComponent,
    TdMarkdownNavigatorWindowDirective,
  ],
  exports: [
    TdMarkdownNavigatorComponent,
    TdMarkdownNavigatorWindowComponent,
    TdMarkdownNavigatorWindowDirective,
  ],
})
export class CovalentMarkdownNavigatorModule {}
