import { Component } from '@angular/core';

@Component({
  selector: 'code-editor-demo',
  styleUrls: ['./code-editor.component.scss'],
  templateUrl: './code-editor.component.html',
  preserveWhitespaces: true,
})
export class CodeEditorDemoComponent {
  editorVal: string = `
  SELECT department_number, sampleid 
  FROM department
  SAMPLE .25, .25, .50
  ORDER BY sampleid;
  
  SELECT department_number, sampleid 
  FROM department
  SAMPLE  3, 5, 8
  ORDER BY sampleid;
  `;
}
