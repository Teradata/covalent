import { Component } from '@angular/core';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'flavored-markdown-demo-buttons',
  styleUrls: ['./flavored-markdown-demo-buttons.component.scss'],
  templateUrl: './flavored-markdown-demo-buttons.component.html',
})
export class FlavoredMarkdownDemoButtonsComponent {
  buttonsFlavoredMarkdown = `
    ## Buttons

    [Go to Mars](#data={"planet": "mars"})
    ---
    [Go to Jupiter](#data={"planet": "Jupiter"})
  `;

  constructor(private _snackBar: MatSnackBar) {}

  handleButtonClicked(data: ITdFlavoredMarkdownButtonClickEvent): void {
    this._snackBar.open(`Button clicked: ${JSON.stringify(data)}`, undefined, {
      duration: 2000,
    });
  }
}
