import { Component } from '@angular/core';
import {
  IMarkdownNavigatorItem,
  TdMarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
} from '@covalent/markdown-navigator';

function prettyJson(items: IMarkdownNavigatorItem[]): string {
  return JSON.stringify(items, undefined, 4);
}

const initialItems: IMarkdownNavigatorItem[] = [
  { title: 'Item 1', markdownString: 'wow' },
  { title: 'Item 2', markdownString: 'wow' },
];

@Component({
  selector: 'markdown-navigator-demo-editor',
  styleUrls: ['./markdown-navigator-demo-editor.component.scss'],
  templateUrl: './markdown-navigator-demo-editor.component.html',
})
export class MarkdownNavigatorDemoEditorComponent {
  input: string = prettyJson(initialItems);
  items: IMarkdownNavigatorItem[] = initialItems;
  windowShouldOpen: boolean = false;

  constructor(private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) {}

  applyInput(): void {
    this.items = JSON.parse(this.input);
    this.input = prettyJson(this.items);
    this.openWindow();
  }

  openWindow(): void {
    this._markdownNavigatorWindowService.open({ items: this.items });
  }

  handleToggleChange(): void {
    if (this.windowShouldOpen) {
      this.openWindow();
    } else {
      this._markdownNavigatorWindowService.close();
    }
  }
}
