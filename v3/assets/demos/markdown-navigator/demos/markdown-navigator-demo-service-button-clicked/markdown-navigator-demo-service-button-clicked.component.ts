import { Component } from '@angular/core';
import { TdMarkdownNavigatorWindowService, TdMarkdownNavigatorWindowComponent } from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'markdown-navigator-demo-service-button-clicked',
  styleUrls: ['./markdown-navigator-demo-service-button-clicked.component.scss'],
  templateUrl: './markdown-navigator-demo-service-button-clicked.component.html',
})
export class MarkdownNavigatorDemoServiceButtonClickedComponent {
  constructor(
    private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService,
    private _snackBar: MatSnackBar,
  ) {}
  open(): void {
    const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = this._markdownNavigatorWindowService.open({
      items: [
        {
          markdownString: `[Trigger button click event](#data={"planet":"mars"})`,
        },
      ],
    });
    dialogRef.componentInstance.buttonClicked.subscribe((data: ITdFlavoredMarkdownButtonClickEvent) =>
      this._snackBar.open(`Button clicked: ${JSON.stringify(data)}`, undefined, { duration: 2000 }),
    );
  }
}
