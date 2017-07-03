import { Component, HostBinding, ViewChild } from '@angular/core';
import { slideInDownAnimation } from '../../../app.animations';
import { TdCodeEditorComponent } from '@covalent/code-editor';

@Component({
  selector: 'code-editor-demo',
  styleUrls: [ './code-editor.component.scss' ],
  templateUrl: './code-editor.component.html',
  animations: [slideInDownAnimation],
})
export class CodeEditorDemoComponent {

  @ViewChild('editor') private _tdEditor: TdCodeEditorComponent;
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  editorTheme: string = 'hc-black';
  editorLanguage: string = 'sql';
  editorVal: string = `SELECT department_number, sampleid 
FROM department
SAMPLE .25, .25, .50
ORDER BY sampleid;

SELECT department_number, sampleid 
FROM department
SAMPLE  3, 5, 8
ORDER BY sampleid;
`;

  // Theme
  changeTheme(): void {
    this._tdEditor.theme = this.editorTheme;
  }

  // Language
  changeLanguage(): void {
    this._tdEditor.language = this.editorLanguage;
  }
}
