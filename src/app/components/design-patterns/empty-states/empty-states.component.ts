import { Component, HostBinding } from '@angular/core';

import { TdCollapseAnimation } from '@covalent/core';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'empty-states',
  styleUrls: ['./empty-states.component.scss'],
  templateUrl: './empty-states.component.html',
  animations: [
    slideInDownAnimation,
    TdCollapseAnimation(),
  ],
})
export class EmptyStatesComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  username: string;
  password: string;
  height:number = 1000; //todo replace this with actual height (get top offset)
  
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
