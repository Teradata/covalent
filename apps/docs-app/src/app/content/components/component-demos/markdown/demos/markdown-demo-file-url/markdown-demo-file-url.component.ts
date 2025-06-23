import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: false,
  selector: 'markdown-demo-file-url',
  styleUrls: ['./markdown-demo-file-url.component.scss'],
  templateUrl: './markdown-demo-file-url.component.html',
})
export class MarkdownDemoFileUrlComponent {
  private _snackBar = inject(MatSnackBar);

  description = `
    Click events for URLs ending with the extensions specified in
    \`fileLinkExtensions\` will be intercepted.

    The URL of the clicked file can be
    captured by the \`fileLinkClicked\` event.
  `;

  handleFileLinkClick(fileURL: URL) {
    this._snackBar.open(
      `File link clicked: ${JSON.stringify(fileURL)}`,
      undefined,
      {
        duration: 2000,
      },
    );
  }
}
