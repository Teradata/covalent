import { Component, HostBinding } from '@angular/core';

import { TdCollapseAnimation } from '@covalent/core';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'design-patterns-cards',
  styleUrls: ['./cards.component.scss'],
  templateUrl: './cards.component.html',
  animations: [
    slideInDownAnimation,
    TdCollapseAnimation(),
  ],
})
export class CardsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  username: string;
  password: string;
  fadeDiv: boolean = true;
  example1: boolean = true;
  example2: boolean = true;
  example3: boolean = true;
  example4: boolean = true;
  example5: boolean = true;
  
  invalidError: boolean = false;

  login(): void {
    this.invalidError = true;
    setTimeout(() => {
      this.invalidError = false;
    }, 500);
  }
  
  toggle(div: string): void {
    this[div] = !this[div];
  }
}
