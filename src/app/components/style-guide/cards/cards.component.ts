import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'design-patterns-cards',
  styleUrls: ['./cards.component.scss'],
  templateUrl: './cards.component.html',
  animations: [slideInDownAnimation],
})
export class CardsComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;

}
