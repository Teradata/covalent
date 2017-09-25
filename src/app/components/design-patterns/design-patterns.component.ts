import { Component, HostBinding, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-design-patterns',
  styleUrls: ['./design-patterns.component.scss'],
  templateUrl: './design-patterns.component.html',
  animations: [fadeAnimation],
})
export class DesignPatternsComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    description: 'Various cards',
    icon: 'view_agenda',
    route: '.',
    title: 'Card Patterns',
  }, {
    description: 'Dialog, toast & inline error patterns',
    icon: 'filter_none',
    route: 'alerts',
    title: 'Alert Patterns',
  }, {
    description: 'List, filter & sorting patterns',
    icon: 'view_list',
    route: 'management-list',
    title: 'Management List Patterns',
  }, {
    description: 'Sidenav toolbar & list to spec',
    icon: 'kitchen',
    route: 'navigation-drawer',
    title: 'Navigation Drawer Patterns',
  }];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MdSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }
}
