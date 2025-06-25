import { Directive, HostListener, Input, inject } from '@angular/core';
import {
  TdMarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
} from '../markdown-navigator-window-service/markdown-navigator-window.service';

@Directive({
  selector: '[tdMarkdownNavigatorWindow]',
})
export class TdMarkdownNavigatorWindowDirective {
  private _markdownNavigatorWindowService = inject(
    TdMarkdownNavigatorWindowService,
  );

  @Input('tdMarkdownNavigatorWindow') config?: IMarkdownNavigatorWindowConfig;
  @Input() disabled = false;

  @HostListener('click') click(): void {
    if (!this.disabled && this.config) {
      this._markdownNavigatorWindowService.open(this.config);
    }
  }
}
