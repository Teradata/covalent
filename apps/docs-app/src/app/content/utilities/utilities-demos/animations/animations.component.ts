import { Component, HostBinding } from '@angular/core';

import {
  slideInDownAnimation,
  slideInUpAnimation,
} from '../../../../app.animations';
import {
  tdRotateAnimation,
  tdCollapseAnimation,
  tdFadeInOutAnimation,
  tdBounceAnimation,
  tdFlashAnimation,
  tdHeadshakeAnimation,
  tdJelloAnimation,
  tdPulseAnimation,
} from '@covalent/core/common';
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
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
  rotateState1 = false;
  rotateState2 = false;

  collapseState1 = true;

  fadeInOutState1 = false;

  bounceState = false;
  flashState = false;
  headshakeState = false;
  jelloState = false;
  pulseState = false;
  animationTypescript = `
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
  rotate180Typescript = `
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
  rotate180Html = `
  <button mat-raised-button [@tdRotate]="triggerState" (click)="triggerState = !triggerState" color="accent">
    Rotate 180&deg;<mat-icon>mood</mat-icon>
  </button>
  `;
  rotate45Typescript = `
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
  rotate45Html = `
  <button mat-raised-button [@tdRotate]="{ value: rotateState2, params: { duration: 500, degreesEnd: -45 } }" (click)="triggerState = !triggerState" color="accent">
    Rotate -45&deg;<mat-icon [@tdRotate]="{ value: rotateState2, params: { duration: 750, degreesEnd: 545 } }">mood</mat-icon>
  </button>
  `;
  collapseTypescript = `
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
  collapseHtml = `
  <button mat-raised-button color="accent" (click)="triggerState = !triggerState">Collapse</button>
  <div [style.overflow]="'hidden'" [@tdCollapse]="{ value: triggerState, params: { duration: 500 }}">
    <mat-card>
      <mat-card-title>Collapse card</mat-card-title>
      <mat-card-content>Collapse card with a click!</mat-card-content>
      <mat-card-actions><button mat-raised-button color="primary" (click)="triggerState = !triggerState">Collapse</button></mat-card-actions>
    </mat-card>
  </div>
  `;

  fadeTypescript = `
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
  fadeHtml = `
  <button mat-raised-button color="accent" (click)="triggerState = !triggerState">Fade In</button>
  <div [@tdFadeInOut]="triggerState">
    <mat-card>
      <mat-card-title>Fade Card</mat-card-title>
      <mat-card-content>Fade in or out with a click!</mat-card-content>
      <mat-card-actions><button mat-raised-button color="primary" (click)="triggerState = !triggerState">Fade Out</button></mat-card-actions>
    </mat-card>
  </div>
  `;
  attentionSeekersAnimationTypescript = `
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
  attentionSeekersAnimationHtml = `
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
