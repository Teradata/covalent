import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-design-patterns',
  styleUrls: ['./design-patterns.component.scss'],
  templateUrl: './design-patterns.component.html',
})
export class DesignPatternsComponent {

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
  }, {
    description: 'Floating primary action button',
    icon: 'add_circle',
    route: 'fab',
    title: 'FAB Patterns',
  }]];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}
}
