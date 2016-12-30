import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-angular-2',
  styleUrls: ['./angular-2.component.scss'],
  templateUrl: './angular-2.component.html',
  animations: [slideInDownAnimation],
})
export class Angular2Component {
   @HostBinding('@routeAnimation') routeAnimation: boolean = true;
}
