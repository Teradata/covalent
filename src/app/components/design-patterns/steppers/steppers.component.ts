import { Component, HostBinding } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'steppers',
  styleUrls: ['./steppers.component.scss'],
  templateUrl: './steppers.component.html',
  animations: [
    slideInDownAnimation,
  ],
})
export class SteppersComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  source: any = '';

  constructor(private sanitizer: DomSanitizer) {
    this.source = sanitizer.bypassSecurityTrustResourceUrl('https://stepper-patterns.stackblitz.io/');
  }
}
