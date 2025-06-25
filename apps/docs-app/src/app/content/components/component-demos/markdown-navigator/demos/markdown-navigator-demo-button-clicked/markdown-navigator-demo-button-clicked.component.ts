import { Component, inject } from '@angular/core';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  standalone: false,
  selector: 'markdown-navigator-demo-button-clicked',
  styleUrls: ['./markdown-navigator-demo-button-clicked.component.scss'],
  templateUrl: './markdown-navigator-demo-button-clicked.component.html',
})
export class MarkdownNavigatorDemoButtonClickedComponent {
  private _snackBar = inject(MatSnackBar);

  items: IMarkdownNavigatorItem[] = [
    {
      markdownString: `[Trigger button click event](#data={"planet":"mars"})`,
    },
  ];

  handleButtonClicked(data: ITdFlavoredMarkdownButtonClickEvent): void {
    this._snackBar.open(`Button clicked: ${JSON.stringify(data)}`, undefined, {
      duration: 2000,
    });
  }
}
