import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'directives-demo',
  styleUrls: ['./directives.component.scss' ],
  templateUrl: './directives.component.html',
  animations: [slideInDownAnimation],
})
export class DirectivesComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  trim: string = '';
  val: string = '';
  toggleDiv: boolean = true;
  fadeDiv: boolean = true;

  toggle(): void {
    this.toggleDiv = !this.toggleDiv;
  }
  fade(): void {
    this.fadeDiv = !this.fadeDiv;
  }
}
