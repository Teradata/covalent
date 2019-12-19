import { Component } from '@angular/core';
import {
  TdMarkdownNavigatorWindowService,
  TdMarkdownNavigatorWindowComponent,
  IMarkdownNavigatorItem,
} from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'markdown-navigator-demo-basic',
  styleUrls: ['./markdown-navigator-demo-basic.component.scss'],
  templateUrl: './markdown-navigator-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class MarkdownNavigatorDemoBasicComponent {
  windowOpen: boolean = false;
  ref: MatDialogRef<TdMarkdownNavigatorWindowComponent>;
  oneItem: IMarkdownNavigatorItem[] = [
    {
      url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
    },
  ];
  options: { name: string; value: IMarkdownNavigatorItem[] }[] = [
    {
      name: 'One item',
      value: this.oneItem,
    },
  ];
  selected: { name: string; value: IMarkdownNavigatorItem[] } = this.options[0];
  currentItems: IMarkdownNavigatorItem[] = this.selected.value;

  constructor(private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) {}

  openDialog(): void {
    if (this.windowOpen) {
      this.closeDialog();
    }
    this.ref = this._markdownNavigatorWindowService.open({ items: this.currentItems });
    this.ref.afterOpened().subscribe(() => {
      this.windowOpen = true;
    });

    this.ref.afterClosed().subscribe(() => {
      this.windowOpen = false;
    });
  }
  closeDialog(): void {
    this.ref.close();
  }
}
