import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-quickstart',
  styleUrls: ['./quickstart.component.scss'],
  templateUrl: './quickstart.component.html',
  animations: [slideInDownAnimation],
})
export class DocsQuickstartComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
