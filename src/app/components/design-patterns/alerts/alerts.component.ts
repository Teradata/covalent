import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'design-patterns-alerts',
  styleUrls: ['./alerts.component.scss'],
  templateUrl: './alerts.component.html',
  animations: [
    slideInDownAnimation,
  ],
})
export class AlertsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  source: any = '';

  constructor(private sanitizer: DomSanitizer) {
    this.source = sanitizer.bypassSecurityTrustResourceUrl('https://alert-patterns.stackblitz.io/');
  }
}
