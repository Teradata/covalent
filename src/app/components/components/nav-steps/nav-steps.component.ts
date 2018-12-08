import { Component } from '@angular/core';

import { tdCollapseAnimation } from '@covalent/core/common';

@Component({
  selector: 'nav-steps-route-1',
  template: '<div class="pad">ROUTE 1</div>',
  preserveWhitespaces: true,
})
export class NavStepsRoute1DemoComponent {

}

@Component({
  selector: 'nav-steps-route-3',
  template: '<div class="pad">ROUTE 3</div>',
  preserveWhitespaces: true,
})
export class NavStepsRoute3DemoComponent {

}

@Component({
  selector: 'nav-steps-route-4',
  template: '<div class="pad">ROUTE 4</div>',
  preserveWhitespaces: true,
})
export class NavStepsRoute4DemoComponent {

}

@Component({
  selector: 'nav-steps-demo',
  styleUrls: [ './nav-steps.component.scss' ],
  templateUrl: './nav-steps.component.html',
  preserveWhitespaces: true,
  animations: [
    tdCollapseAnimation,
  ],
})
export class NavStepsDemoComponent {

  toggleHorizontalDemoCode: boolean = false;
  toggleVerticalDemoCode: boolean = false;

}
