import { Component } from '@angular/core';
import {
  ITdDynamicElementConfig,
  TdDynamicElement,
} from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo-file-input',
  styleUrls: ['./dynamic-forms-demo-file-input.component.scss'],
  templateUrl: './dynamic-forms-demo-file-input.component.html',
})
export class DynamicFormsDemoFileInputComponent {
  fileElements: ITdDynamicElementConfig[] = [
    {
      name: 'fileInput',
      label: 'Browse a file',
      hint: 'this is a file input hint',
      type: TdDynamicElement.FileInput,
    },
  ];
}
