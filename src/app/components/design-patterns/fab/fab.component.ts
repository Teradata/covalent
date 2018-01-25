import { Component, HostBinding } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'fab',
  styleUrls: ['./fab.component.scss'],
  templateUrl: './fab.component.html',
  animations: [
    slideInDownAnimation,
  ],
})
export class FABComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  source: any = '';

  constructor(private sanitizer: DomSanitizer) {
    this.source = sanitizer.bypassSecurityTrustResourceUrl('https://fab-patterns.stackblitz.io/');
  }
}
