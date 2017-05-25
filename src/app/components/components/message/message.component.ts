import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'message-demo',
  styleUrls: ['./message.component.scss' ],
  templateUrl: './message.component.html',
  animations: [slideInDownAnimation],
})
export class MessageDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
