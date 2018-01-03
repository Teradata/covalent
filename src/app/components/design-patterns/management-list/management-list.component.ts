import { Component, OnInit, HostBinding } from '@angular/core';

import { TdCollapseAnimation } from '@covalent/core';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'design-patterns-management-list',
  styleUrls: ['./management-list.component.scss'],
  templateUrl: './management-list.component.html',
  animations: [
    slideInDownAnimation
  ],
})

export class ManagementListComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  
  source: any = '';
  
  constructor(private sanitizer: DomSanitizer) {
    this.source = sanitizer.bypassSecurityTrustResourceUrl('https://manage-list-pattern.stackblitz.io/');
  }
}
