import { Component } from '@angular/core';

@Component({
  selector: 'step-nav-demo',
  styleUrls: [ './step-nav.component.scss' ],
  templateUrl: './step-nav.component.html',
})
export class StepNavDemoComponent {
  routeLinks = [
    {label: 'Home', link: '/', disabled: true},
    {label: 'Breadcrumb', link: '../breadcrumbs', disabled: false},
    {label: 'Tab Select', link: '../tabselect', disabled: false}];
  activeLink = this.routeLinks[0];
}