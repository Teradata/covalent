import { Component } from '@angular/core';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: false,
  selector: 'flavored-markdown-demo-buttons',
  styleUrls: ['./flavored-markdown-demo-buttons.component.scss'],
  templateUrl: './flavored-markdown-demo-buttons.component.html',
})
export class FlavoredMarkdownDemoButtonsComponent {
  buttonsFlavoredMarkdown = `
    ## Buttons

    [Go to mars](#data={"planet": "mars"})
    ---
    [Go to jupiter](#data={"planet": "Jupiter"})
  `;

  constructor(private _snackBar: MatSnackBar) {}

  handleButtonClicked(data: ITdFlavoredMarkdownButtonClickEvent): void {
    this._snackBar.open(`Button clicked: ${JSON.stringify(data)}`, undefined, {
      duration: 2000,
    });
  }
}
