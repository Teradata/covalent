import { Component } from '@angular/core';
import { StepState } from '../../../platform/core/steps';

@Component({
  selector: 'step-nav-demo',
  styleUrls: [ './step-nav.component.scss' ],
  templateUrl: './step-nav.component.html',
})
export class StepNavDemoComponent {
  routeLinks = [
    {label: 'Home', sublabel: 'Home to navigate to all experimental components', link: ['../'], disabled: false},
    {label: 'Breadcrumb', sublabel: 'Breadcrumbs for navigation', link: ['../breadcrumbs'], disabled: false, state: StepState.Required},
    {label: 'Tab Select', sublabel: 'Tab group component that behaves like a mat-select', link: ['../tabselect'], disabled: true, state: StepState.Complete}];
  activeLink = this.routeLinks[0];
}