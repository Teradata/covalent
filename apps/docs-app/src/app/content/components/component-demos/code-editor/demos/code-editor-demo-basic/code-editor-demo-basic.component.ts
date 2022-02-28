import { Component, ChangeDetectorRef } from '@angular/core';

const sql = `SELECT department_number, sampleid
FROM department
SAMPLE .25, .25, .50
ORDER BY sampleid;

SELECT department_number, sampleid
FROM department
SAMPLE  3, 5, 8
ORDER BY sampleid;
`;

const typescript = `interface OS {
    name: String;
    language: String;
}
const dessert = (type: OS): void => {
  console.log('Android ' + type.name + ' has ' + type.language + ' language');
};

const nougat = {
  name: 'N',
  language: 'Java'
}

dessert(nougat);
`;

const javascript = `var rows = prompt("How many rows for your multiplication table?");
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

const html = `<div layout="row" layout-align="start center" class="pad-xs pad-bottom-none">
  <span flex="none" hide-xs class="push-right mat-body-1">Editor Language</span>
  <mat-form-field floatLabel="never">
    <mat-select [(ngModel)]="editorLanguage" (ngModelChange)="changeLanguage()" placeholder="Editor Language">
      <mat-option value="sql">SQL</mat-option>
      <mat-option value="javascript">JavaScript</mat-option>
      <mat-option value="typescript">TypeScript</mat-option>
      <mat-option value="html">HTML</mat-option>
    </mat-select>
  </mat-form-field>
</div>
`;

@Component({
  selector: 'code-editor-demo-basic',
  styleUrls: ['./code-editor-demo-basic.component.scss'],
  templateUrl: './code-editor-demo-basic.component.html',
})
export class CodeEditorDemoBasicComponent {
  editorLanguage = 'sql';
  editorVal: string = sql;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  changeLanguage(): void {
    this.editorVal =
      this.editorLanguage === 'sql'
        ? sql
        : this.editorLanguage === 'typescript'
        ? typescript
        : this.editorLanguage === 'javascript'
        ? javascript
        : html;
    this._changeDetectorRef.detectChanges();
  }
}
