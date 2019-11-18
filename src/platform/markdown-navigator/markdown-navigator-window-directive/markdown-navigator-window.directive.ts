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

  constructor(private _markdownNavigatorWindowService: MarkdownNavigatorWindowService) {}

  @HostListener('click') click(): void {
    this._markdownNavigatorWindowService.open(this.config);
  }
}
