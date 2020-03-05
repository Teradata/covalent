import { Component } from '@angular/core';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo-file-input',
  styleUrls: ['./dynamic-forms-demo-file-input.component.scss'],
  templateUrl: './dynamic-forms-demo-file-input.component.html',
  preserveWhitespaces: true,
})
export class DynamicFormsDemoFileInputComponent {
  fileElements: ITdDynamicElementConfig[] = [
    {
      name: 'file-input',
      label: 'Browse a file',
      hint: 'this is a file input hint',
      type: TdDynamicElement.FileInput,
    },
  ];
}
