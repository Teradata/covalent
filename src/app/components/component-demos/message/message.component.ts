import { Component, HostBinding } from '@angular/core';
import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'message-demo',
  styleUrls: ['./message.component.scss'],
  templateUrl: './message.component.html',
  animations: [slideInUpAnimation],
  preserveWhitespaces: true,
})
export class MessageDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
}
