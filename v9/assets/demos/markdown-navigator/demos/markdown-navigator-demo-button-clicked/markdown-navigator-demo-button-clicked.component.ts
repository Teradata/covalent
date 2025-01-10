import { Component } from '@angular/core';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-button-clicked',
  styleUrls: ['./markdown-navigator-demo-button-clicked.component.scss'],
  templateUrl: './markdown-navigator-demo-button-clicked.component.html',
})
export class MarkdownNavigatorDemoButtonClickedComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      markdownString: `[Trigger button click event](#data={"planet":"mars"})`,
    },
  ];

  constructor(private _snackBar: MatSnackBar) {}

  handleButtonClicked(data: ITdFlavoredMarkdownButtonClickEvent): void {
    this._snackBar.open(`Button clicked: ${JSON.stringify(data)}`, undefined, {
      duration: 2000,
    });
  }
}
