import { Component } from '@angular/core';

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {
  column: number = 0;
  lineNumber: number = 0;

  async onEditorInitialized(editor: any): Promise<void> {
    let line: any = await editor.getPosition();

    this.column = line.column;
    this.lineNumber = line.lineNumber;
  }
}
