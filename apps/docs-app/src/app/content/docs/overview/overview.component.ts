import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
  animations: [slideInUpAnimation],
})
export class DocsOverviewComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
}
