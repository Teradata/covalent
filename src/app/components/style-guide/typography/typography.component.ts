import { Component } from '@angular/core';

@Component({
  selector: 'style-guide-typography',
  styleUrls: ['typography.component.scss'],
  templateUrl: 'typography.component.html',
})
export class TypographyComponent {
  colors: string[] = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
  ];
  neutrals: string[] = [
    'brown',
    'grey',
    'blue-grey',
  ];
}
