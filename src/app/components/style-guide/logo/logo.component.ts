import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'style-guide-logo',
  styleUrls: ['./logo.component.scss'],
  templateUrl: './logo.component.html',
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class LogoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
