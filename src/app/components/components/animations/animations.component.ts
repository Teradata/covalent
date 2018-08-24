import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';
import { tdRotateAnimation } from '../../../../platform/core/common/animations/rotate/rotate.animation';
import { tdCollapseAnimation } from '../../../../platform/core/common/animations/collapse/collapse.animation';
import { TdFadeInOutAnimation } from '../../../../platform/core/common/animations/fade/fadeInOut.animation';
import { TdBounceAnimation } from '../../../../platform/core/common/animations/bounce/bounce.animation';
import { TdFlashAnimation } from '../../../../platform/core/common/animations/flash/flash.animation';
import { TdHeadshakeAnimation } from '../../../../platform/core/common/animations/headshake/headshake.animation';
import { TdJelloAnimation } from '../../../../platform/core/common/animations/jello/jello.animation';
import { TdPulseAnimation } from '../../../../platform/core/common/animations/pulse/pulse.animation';

@Component({
  selector: 'animations-demo',
  styleUrls: ['./animations.component.scss' ],
  templateUrl: './animations.component.html',
  animations: [
    slideInDownAnimation,
    tdRotateAnimation,
    tdCollapseAnimation,
    TdFadeInOutAnimation(),
    TdBounceAnimation(),
    TdFlashAnimation(),
    TdHeadshakeAnimation(),
    TdJelloAnimation(),
    TdPulseAnimation(),
  ],
  preserveWhitespaces: true,
})
export class AnimationsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  rotateState1: boolean = false;
  rotateState2: boolean = false;

  collapseState1: boolean = true;

  fadeInOutState1: boolean = false;

  bounceState: boolean = false;
  flashState: boolean = false;
  headshakeState: boolean = false;
  jelloState: boolean = false;
  pulseState: boolean = false;

}
