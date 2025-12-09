import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdMarkdownNavigatorComponent } from './markdown-navigator.component';
import { TdMarkdownNavigatorWindowComponent } from './markdown-navigator-window/markdown-navigator-window.component';
import { TdMarkdownNavigatorWindowDirective } from './markdown-navigator-window-directive/markdown-navigator-window.directive';
import { TdMarkdownNavigatorWindowService } from './markdown-navigator-window-service/markdown-navigator-window.service';
import { TdDialogService } from '@covalent/core/dialogs';
import { MatIconRegistry } from '@angular/material/icon';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [
    CommonModule,

    TdMarkdownNavigatorComponent,
    TdMarkdownNavigatorWindowComponent,
    TdMarkdownNavigatorWindowDirective,
  ],
  exports: [
    TdMarkdownNavigatorComponent,
    TdMarkdownNavigatorWindowComponent,
    TdMarkdownNavigatorWindowDirective,
  ],
  providers: [TdMarkdownNavigatorWindowService, TdDialogService],
})
export class CovalentMarkdownNavigatorModule {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.registerFontClassAlias(
      'covalent-icons',
      'covalent-icons mat-ligature-font',
    );
  }
}
