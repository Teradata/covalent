import { Component } from '@angular/core';
import { TdMarkdownNavigatorWindowService, TdMarkdownNavigatorWindowComponent } from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'markdown-navigator-demo-events',
  styleUrls: ['./markdown-navigator-demo-events.component.scss'],
  templateUrl: './markdown-navigator-demo-events.component.html',
})
export class MarkdownNavigatorDemoEventsComponent {
  constructor(
    private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService,
    private _snackBar: MatSnackBar,
  ) {}
  openDialog(): void {
    const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> = this._markdownNavigatorWindowService.open({
      items: [
        {
          title: 'Mars',
          markdownString: `[Go to Mars](#data={"planet": "mars"})`,
        },
        {
          title: 'Jupiter',
          markdownString: `[Go to Jupiter](#data={"planet": "Jupiter"})`,
        },
      ],
    });
    dialogRef.componentInstance.buttonClicked.subscribe((data: ITdFlavoredMarkdownButtonClickEvent) =>
      this._snackBar.open(`Button clicked: ${JSON.stringify(data)}`, undefined, { duration: 2000 }),
    );
  }
}
