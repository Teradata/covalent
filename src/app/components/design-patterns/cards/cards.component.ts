import { Component, HostBinding } from '@angular/core';

import { TdCollapseAnimation } from '@covalent/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'design-patterns-cards',
  styleUrls: ['./cards.component.scss'],
  templateUrl: './cards.component.html',
  animations: [
    slideInDownAnimation,
    TdCollapseAnimation(),
  ],
})
export class CardsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  
  source: any = '';
  
  invalidError: boolean = false;

  login(): void {
    this.invalidError = true;
    setTimeout(() => {
      this.invalidError = false;
    }, 500);
  }
  
  toggle(div: string): void {
    this[div] = !this[div];
  }

  constructor(private sanitizer: DomSanitizer) {
    this.source = sanitizer.bypassSecurityTrustResourceUrl('https://cards-patterns.stackblitz.io/');
  }
}
