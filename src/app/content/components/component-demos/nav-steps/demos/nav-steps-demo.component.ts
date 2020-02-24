import { Component } from '@angular/core';

@Component({
  selector: 'nav-steps-route-1',
  template: '<div class="pad-top">ROUTE 1</div>',
})
export class NavStepsRoute1DemoComponent {}

@Component({
  selector: 'nav-steps-route-3',
  template: '<div class="pad-top">ROUTE 3</div>',
})
export class NavStepsRoute3DemoComponent {}

@Component({
  selector: 'nav-steps-route-4',
  template: '<div class="pad-top">ROUTE 4</div>',
})
export class NavStepsRoute4DemoComponent {}

@Component({
  selector: 'nav-steps-demo',
  styleUrls: ['./nav-steps-demo.component.scss'],
  templateUrl: './nav-steps-demo.component.html',
})
export class NavStepsDemoComponent {}
