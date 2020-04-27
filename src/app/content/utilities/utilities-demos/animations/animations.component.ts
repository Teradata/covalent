import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation, slideInUpAnimation } from '../../../../app.animations';
import { tdRotateAnimation } from '../../../../../platform/core/common/animations/rotate/rotate.animation';
import { tdCollapseAnimation } from '../../../../../platform/core/common/animations/collapse/collapse.animation';
import { tdFadeInOutAnimation } from '../../../../../platform/core/common/animations/fade/fadeInOut.animation';
import { tdBounceAnimation } from '../../../../../platform/core/common/animations/bounce/bounce.animation';
import { tdFlashAnimation } from '../../../../../platform/core/common/animations/flash/flash.animation';
import { tdHeadshakeAnimation } from '../../../../../platform/core/common/animations/headshake/headshake.animation';
import { tdJelloAnimation } from '../../../../../platform/core/common/animations/jello/jello.animation';
import { tdPulseAnimation } from '../../../../../platform/core/common/animations/pulse/pulse.animation';

@Component({
  selector: 'animations-demo',
  styleUrls: ['./animations.component.scss'],
  templateUrl: './animations.component.html',
  animations: [
    slideInUpAnimation,
    slideInDownAnimation,
    tdRotateAnimation,
    tdCollapseAnimation,
    tdFadeInOutAnimation,
    tdBounceAnimation,
    tdFlashAnimation,
    tdHeadshakeAnimation,
    tdJelloAnimation,
    tdPulseAnimation,
  ],
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
  animationTypescript: string = `
  import { tdAnimationUtility_A, tdAnimationUtility_B } from '@covalent/core/common';

  @Component({
    ...
    animations: [
      tdAnimationUtility_A,
      tdAnimationUtility_B,
    ],
  })
  export class MyComponent {
    triggerState_A: boolean = false;
    triggerState_B: boolean = false;
    ...
  }
  `;
  rotate180Typescript: string = `
  import { tdRotateAnimation } from '@covalent/core/common';
  ...
  animations: [
    tdRotateAnimation, // using implicit anchor name '@tdRotate' in template
  ],
  ...
  class MyDemo {
    triggerState: boolean = false;
  }
  `;
  rotate180Html: string = `
  <button mat-raised-button [@tdRotate]="triggerState" (click)="triggerState = !triggerState" color="accent">
    Rotate 180&deg;<mat-icon>mood</mat-icon>
  </button>
  `;
  rotate45Typescript: string = `
  import { tdRotateAnimation } from '@covalent/core/common';
  ...
  animations: [
    tdRotateAnimation,
  ],
  ...
  class MyDemo {
    triggerState: boolean = false;
  }
  `;
  rotate45Html: string = `
  <button mat-raised-button [@tdRotate]="{ value: rotateState2, params: { duration: 500, degreesEnd: -45 } }" (click)="triggerState = !triggerState" color="accent">
    Rotate -45&deg;<mat-icon [@tdRotate]="{ value: rotateState2, params: { duration: 750, degreesEnd: 545 } }">mood</mat-icon>
  </button>
  `;
  collapseTypescript: string = `
  import { tdCollapseAnimation } from '@covalent/core/common';
  ...
  animations: [
    tdCollapseAnimation, // using implicit anchor name 'tdCollapse' in template
  ],
  ...
  class MyDemo {
    triggerState: boolean = true;
  }
  `;
  collapseHtml: string = `
  <button mat-raised-button color="accent" (click)="triggerState = !triggerState">Collapse</button>
  <div [style.overflow]="'hidden'" [@tdCollapse]="{ value: triggerState, params: { duration: 500 }}">
    <mat-card>
      <mat-card-title>Collapse card</mat-card-title>
      <mat-card-content>Collapse card with a click!</mat-card-content>
      <mat-card-actions><button mat-raised-button color="primary" (click)="triggerState = !triggerState">Collapse</button></mat-card-actions>
    </mat-card>
  </div>
  `;

  fadeTypescript: string = `
  import { tdFadeInOutAnimation } from '@covalent/core/common';
  ...
  animations: [
    tdFadeInOutAnimation, // using implicit anchor name 'tdFadeInOut' in template
  ],
  ...
  class MyDemo {
    triggerState: boolean = false;
  }
  `;
  fadeHtml: string = `
  <button mat-raised-button color="accent" (click)="triggerState = !triggerState">Fade In</button>
  <div [@tdFadeInOut]="triggerState">
    <mat-card>
      <mat-card-title>Fade Card</mat-card-title>
      <mat-card-content>Fade in or out with a click!</mat-card-content>
      <mat-card-actions><button mat-raised-button color="primary" (click)="triggerState = !triggerState">Fade Out</button></mat-card-actions>
    </mat-card>
  </div>
  `;
  attentionSeekersAnimationTypescript: string = `
  import {
    tdBounceAnimation,
    tdFlashAnimation,
    tdHeadshakeAnimation,
    tdJelloAnimation,
    tdPulseAnimation,
  } from '@covalent/core/common';
  ...
  animations: [
    tdBounceAnimation, // using implicit anchor name 'tdBounce' in template
    tdFlashAnimation, // using implicit anchor name 'tdFlash' in template
    tdHeadshakeAnimation, // using implicit anchor name 'tdHeadshake' in template
    tdJelloAnimation, // using implicit anchor name 'tdJello' in template
    tdPulseAnimation, // using implicit anchor name 'tdPulse' in template
  ],
  ...
  class MyDemo {
    bounceState: boolean = false;
    flashState: boolean = false;
    headshakeState: boolean = false;
    jelloState: boolean = false;
    pulseState: boolean = false;
  }
  `;
  attentionSeekersAnimationHtml: string = `
  <button mat-raised-button [@tdBounce]="bounceState" (click)="bounceState = !bounceState" color="accent">
    @tdBounce <mat-icon>mood</mat-icon>
  </button>
  <button mat-raised-button [@tdFlash]="flashState" (click)="flashState = !flashState" color="accent">
    @tdFlash <mat-icon>mood</mat-icon>
  </button>
  <button mat-raised-button [@tdHeadshake]="headshakeState" (click)="headshakeState = !headshakeState" color="accent">
    @tdHeadshake <mat-icon>mood</mat-icon>
  </button>
  <button mat-raised-button [@tdJello]="jelloState" (click)="jelloState = !jelloState" color="accent">
    @tdJello <mat-icon>mood</mat-icon>
  </button>
  <button mat-raised-button [@tdPulse]="pulseState" (click)="pulseState = !pulseState" color="accent">
    @tdPulse <mat-icon>mood</mat-icon>
  </button>
  `;
}
