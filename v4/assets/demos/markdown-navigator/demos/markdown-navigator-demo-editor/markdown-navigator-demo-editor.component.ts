import { Component } from '@angular/core';
import {
  IMarkdownNavigatorItem,
  TdMarkdownNavigatorWindowService,
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
  windowShouldOpen = false;

  constructor(
    private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService
  ) {}

  applyInput(): void {
    this.items = JSON.parse(this.input);
    this.input = prettyJson(this.items);
    this.openOrClose();
  }

  openOrClose(): void {
    if (this.windowShouldOpen) {
      this._markdownNavigatorWindowService.open({ items: this.items });
    } else {
      this._markdownNavigatorWindowService.close();
    }
  }
}
