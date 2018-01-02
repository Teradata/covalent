import { Component, HostBinding } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'empty-states',
  styleUrls: ['./empty-states.component.scss'],
  templateUrl: './empty-states.component.html',
  animations: [
    slideInDownAnimation,
  ],
})
export class EmptyStatesComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  source: any = '';

  constructor(private sanitizer: DomSanitizer) {
    this.source = sanitizer.bypassSecurityTrustResourceUrl('https://empty-state-patterns.stackblitz.io/');
  }
}
