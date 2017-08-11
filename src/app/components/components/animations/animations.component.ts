import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';
import { TdRotateAnimation } from '../../../../platform/core/common/animations/rotate/rotate.animation';

@Component({
  selector: 'animations-demo',
  styleUrls: ['./animations.component.scss' ],
  templateUrl: './animations.component.html',
  animations: [
    slideInDownAnimation,
    TdRotateAnimation('rotateExample180'),
    TdRotateAnimation('rotateExample360', 500, 360),
    TdRotateAnimation('rotateExample540', 1000, 540),
  ],
})
export class AnimationsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  rotateState1: boolean = false;
  rotateState2: boolean = false;
  rotateState3: boolean = false;

}
