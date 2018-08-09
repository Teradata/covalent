import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TdCollapseAnimation } from '@covalent/core/common';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'design-patterns-navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss'],
  templateUrl: './navigation-drawer.component.html',
  animations: [
    slideInDownAnimation,
    TdCollapseAnimation(),
  ],
})
export class NavigationDrawerComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  source: any = '';
  
  constructor(private sanitizer: DomSanitizer) {
    this.source = sanitizer.bypassSecurityTrustResourceUrl('https://nav-drawer-patterns.stackblitz.io');
  }
}
