import { Component } from '@angular/core';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';

@Component({
  selector: 'dynamic-forms-demo-text',
  styleUrls: ['./dynamic-forms-demo-text.component.scss'],
  templateUrl: './dynamic-forms-demo-text.component.html',
})
export class DynamicFormsDemoTextComponent {
  textElements: ITdDynamicElementConfig[] = [
    {
      name: 'input',
      hint: 'this is an input hint',
      type: TdDynamicElement.Input,
      required: false,
      flex: 50,
    },
    {
      name: 'requiredInput',
      label: 'Input Label',
      placeholder: 'Input Placeholder',
      type: TdDynamicElement.Input,
      required: true,
      flex: 50,
    },
    {
      name: 'textLength',
      label: 'Text Length',
      type: TdDynamicElement.Input,
      minLength: 4,
      maxLength: 12,
      flex: 50,
    },
    {
      name: 'text',
      type: TdDynamicType.Text,
      required: false,
      default: 'Default',
      flex: 50,
      disabled: true,
    },
    {
      name: 'textarea',
      hint: 'this is a textarea hint',
      type: TdDynamicElement.Textarea,
      required: false,
    },
    {
      name: 'requiredPassword',
      label: 'Password Label',
      type: TdDynamicElement.Password,
      required: true,
    },
  ];
}
