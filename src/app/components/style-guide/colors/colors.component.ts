import { Component } from '@angular/core';

@Component({
  selector: 'style-guide-colors',
  styleUrls: ['app/components/style-guide/colors/colors.component.scss'],
  templateUrl: 'app/components/style-guide/colors/colors.component.html',
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
