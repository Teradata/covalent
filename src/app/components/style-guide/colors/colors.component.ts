import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'style-guide-colors',
  styleUrls: ['colors.component.css'],
  templateUrl: 'colors.component.html',
})
export class ColorsComponent {
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
