import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TdCollapseAnimation } from '@covalent/core/common';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'design-patterns-cards',
  styleUrls: ['./cards.component.scss'],
  templateUrl: './cards.component.html',
  animations: [
    slideInDownAnimation,
  ],
})
export class CardsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  
  source: any = '';
  
  constructor(private sanitizer: DomSanitizer) {
    this.source = sanitizer.bypassSecurityTrustResourceUrl('https://cards-patterns.stackblitz.io/');
  }
}
