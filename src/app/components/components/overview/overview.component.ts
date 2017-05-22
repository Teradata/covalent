import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'components-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
  animations: [slideInDownAnimation],
})
export class ComponentsOverviewComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
      color: 'deep-purple-A400',
      icon: 'view_list',
      route: 'steps',
      title: 'Stepper',
    }, {
      color: 'blue-A400',
      icon: 'open_with',
      route: 'expansion-panel',
      title: 'Expansion Panel',
    }, {
      color: 'pink-A400',
      icon: 'space_bar',
      route: 'file-input',
      title: 'File Input',
    }, {
      color: 'cyan-A400',
      icon: 'attach_file',
      route: 'file-upload',
      title: 'File Upload',
    }, {
      color: 'deep-orange-A400',
      icon: 'label',
      route: 'chips',
      title: 'Chips',
    }, {
      color: 'lime-A700',
      icon: 'hourglass_empty',
      route: 'loading',
      title: 'Loading',
    }, {
      color: 'amber-A400',
      icon: 'open_in_browser',
      route: 'dialogs',
      title: 'Simple Dialogs',
    }, {
      color: 'green-A400',
      icon: 'grid_on',
      route: 'data-table',
      title: 'Data Table',
    }, {
      color: 'teal-A400',
      icon: 'format_indent_increase',
      route: 'json-formatter',
      title: 'JSON Formatter',
    }, {
      color: 'indigo-A400',
      icon: 'swap_horiz',
      route: 'paging',
      title: 'Paging',
    }, {
      color: 'purple-A400',
      icon: 'notifications',
      route: 'notifications',
      title: 'Notifications',
    }, {
      color: 'light-blue-A400',
      icon: 'info_outline',
      route: 'message',
      title: 'Messages',
    }, {
      color: 'indigo-A400',
      icon: 'search',
      route: 'search',
      title: 'Search',
    }, {
      color: 'red-A400',
      icon: 'devices',
      route: 'media',
      title: 'Media Queries',
    }, {
      color: 'light-blue-A400',
      icon: 'wb_iridescent',
      route: 'directives',
      title: 'Directives',
    }, {
      color: 'deep-orange-A400',
      icon: 'filter_list',
      route: 'pipes',
      title: 'Pipes',
    },
  ];
  optional: Object[] = [{
      color: 'pink-A400',
      icon: 'code',
      route: 'syntax-highlighting',
      title: 'Highlighting',
    }, {
      color: 'orange-A400',
      icon: 'chrome_reader_mode',
      route: 'markdown',
      title: 'Markdown',
    }, {
      color: 'green-A400',
      icon: 'format_align_center',
      route: 'dynamic-forms',
      title: 'Dynamic Forms',
    }, {
      color: 'indigo-A400',
      icon: 'http',
      route: 'http',
      title: 'HTTP Service',
    },
  ];
  external: Object[] = [{
      color: 'purple-A400',
      icon: 'insert_chart',
      route: 'ngx-charts',
      title: 'NGX-Charts',
    }, {
      color: 'blue-A400',
      icon: 'language',
      route: 'ngx-translate',
      title: 'NGX-Translate',
    },
  ];
}
