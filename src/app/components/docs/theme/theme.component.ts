import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  animations: [slideInDownAnimation],
})
export class ThemeComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
