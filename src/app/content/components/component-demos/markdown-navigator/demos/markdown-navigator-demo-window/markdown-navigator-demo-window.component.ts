import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'markdown-navigator-demo-window',
  styleUrls: ['./markdown-navigator-demo-window.component.scss'],
  templateUrl: './markdown-navigator-demo-window.component.html',
})
export class MarkdownNavigatorDemoWindowComponent {
  constructor(private _snackBar: MatSnackBar) {}
  handleClose(): void {
    this._snackBar.open(`Close button clicked`, undefined, { duration: 2000 });
  }
}
