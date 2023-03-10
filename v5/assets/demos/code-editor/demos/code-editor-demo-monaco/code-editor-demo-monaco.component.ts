import { Component } from '@angular/core';
import { editor } from 'monaco-editor';

@Component({
  selector: 'code-editor-demo-monaco',
  styleUrls: ['./code-editor-demo-monaco.component.scss'],
  templateUrl: './code-editor-demo-monaco.component.html',
})
export class CodeEditorDemoMonacoComponent {
  private _editor: any;

  editorTheme = 'vs';
  editorVal = `var rows = prompt("How many rows for your multiplication table?");
var cols = prompt("How many columns for your multiplication table?");
if(rows == "" || rows == null)
  rows = 10;
if(cols== "" || cols== null)
  cols = 10;
createTable(rows, cols);
function createTable(rows, cols) {
  var j=1;
  var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
  for(i=1;i<=rows;i++) {
    output = output + "<tr>";
    while(j<=cols) {
      output = output + "<td>" + i*j + "</td>";
      j = j+1;
    }
    output = output + "</tr>";
    j = 1;
  }
  output = output + "</table>";
  document.write(output);
}
`;

  configChanged(theme: string): void {
    const monaco: any = (window as any).monaco;
    if (monaco) {
      monaco.editor.setTheme(theme);
    }
    this.getModel();
  }

  editorInitialized(editorInstance: any): void {
    this._editor = editorInstance;
  }

  async getModel(): Promise<any> {
    // tslint:disable-next-line:prefer-immediate-return
    const editorModel: editor.ITextModel = await this._editor.getModel();
    // do something with editorModel

    return editorModel;
  }
}
