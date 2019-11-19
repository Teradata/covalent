import { Directive, HostListener, Input } from '@angular/core';
import {
  MarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
} from '../markdown-navigator-window-service/markdown-navigator-window.service';

@Directive({
  selector: '[tdMarkdownNavigatorWindow]',
})
export class MarkdownNavigatorWindowDirective {
  @Input('tdMarkdownNavigatorWindow') config: IMarkdownNavigatorWindowConfig;
  @Input() disabled: boolean = false;
  constructor(private _markdownNavigatorWindowService: MarkdownNavigatorWindowService) {}

  @HostListener('click') click(): void {
    if (!this.disabled) {
      this._markdownNavigatorWindowService.open(this.config);
    }
  }
}
