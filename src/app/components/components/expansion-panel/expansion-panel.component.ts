import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'expansion-panel-demo',
  styleUrls: ['./expansion-panel.component.scss'],
  templateUrl: './expansion-panel.component.html',
  animations: [slideInDownAnimation],
})
export class ExpansionPanelDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  disabled: boolean = false;

}
