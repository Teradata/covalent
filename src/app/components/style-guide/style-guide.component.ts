import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-style-guide',
  styleUrls: ['./style-guide.component.scss'],
  templateUrl: './style-guide.component.html',
  animations: [fadeAnimation],
})
export class StyleGuideComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    description: 'Teradata logo usage',
    icon: 'color_lens',
    route: '.',
    title: 'Logo',
  }, {
    description: 'Material color palette usage',
    icon: 'format_paint',
    route: 'colors',
    title: 'Colors',
  }, {
    description: 'Font options and usage',
    icon: 'font_download',
    route: 'typography',
    title: 'Typography',
  }, {
    description: 'Library of Material icons',
    icon: 'insert_emoticon',
    route: 'iconography',
    title: 'Iconography',
  }, {
    description: 'Product icon usage in apps',
    icon: 'photo_size_select_actual',
    route: 'product-icons',
    title: 'Product Icons',
  }, {
    description: 'Utility CSS classes',
    icon: 'build',
    route: 'utility-styles',
    title: 'Utility Styles',
  }, {
    description: 'Design templates & libraries',
    icon: 'cloud_download',
    route: 'resources',
    title: 'Resources',
  }];
  patterns: Object[] = [{
    description: 'Material Design card patterns',
    icon: 'view_agenda',
    route: 'cards',
    title: 'Card Patterns',
  }, {
    description: 'Dialog, toast & inline error patterns',
    icon: 'filter_none',
    route: 'dialogs',
    title: 'Dialog Patterns',
  }, {
    description: 'List, filter & sorting patterns',
    icon: 'view_list',
    route: 'management-list',
    title: 'Management List',
  }, {
    description: 'Sidenav toolbar & list to spec',
    icon: 'kitchen',
    route: 'navigation-drawer',
    title: 'Navigation Drawer',
  }];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}
}
