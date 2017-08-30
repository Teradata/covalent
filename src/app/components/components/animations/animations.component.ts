import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';
import { TdRotateAnimation } from '../../../../platform/core/common/animations/rotate/rotate.animation';
import { TdBounceAnimation } from '../../../../platform/core/common/animations/bounce/bounce.animation';
import { TdFlashAnimation } from '../../../../platform/core/common/animations/flash/flash.animation';

@Component({
  selector: 'animations-demo',
  styleUrls: ['./animations.component.scss' ],
  templateUrl: './animations.component.html',
  animations: [
    slideInDownAnimation,
    TdRotateAnimation(),
    TdRotateAnimation({ anchor: 'tdRotate545', duration: 750, degrees: 545, ease: 'ease-in' }),
    TdRotateAnimation({ anchor: 'tdRotateNeg45', duration: 500, degrees: -45 }),
    TdBounceAnimation({ anchor: 'tdBounce', duration: 750 }),
    TdFlashAnimation({ anchor: 'tdFlash', duration: 750 }),
  ],
})
export class AnimationsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  rotateState1: boolean = false;
  rotateState2: boolean = false;
  bounceState: boolean = false;
  flashState: boolean = false;

}
