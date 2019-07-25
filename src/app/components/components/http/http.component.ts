import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'http-demo',
  styleUrls: ['./http.component.scss'],
  templateUrl: './http.component.html',
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class HttpDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
}
